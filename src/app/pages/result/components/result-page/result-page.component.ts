import { Component, OnInit } from '@angular/core';
import {ResultService} from "../../services/result.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ResultModel} from "../../models/resultModel";
import {Vehicle} from "../../models/vehicle";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
  providers:[ResultService]
})
export class ResultPageComponent implements OnInit {
  isLoading: boolean = true;
  originId?: string | null;
  destinationId?: string | null;
  model?: ResultModel | null;
  constructor(private resultService: ResultService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    //get originId from route
    this.originId = this.route.snapshot.paramMap.get('originId');
    //get destinationId from route
    this.destinationId = this.route.snapshot.paramMap.get('destinationId');
    //return to the booking page if one of them is null
    if (!this.originId || !this.destinationId){
      this.router.navigate(['/pages/start/']);
    }
    this.loadData();
  }

  private loadData() {
    this.resultService.tripRequest(this.originId!,this.destinationId!,new Date()).subscribe(res => {
      //initialize the view model
      this.model = new ResultModel();
      //get the autocard model from json data
      const autoCard = res.find(result => result.legs[0].transportation.product.name === 'Auto');
      if (autoCard) {
        const {properties,distance} = autoCard.legs[0];
        this.model.auto.co2 = properties.CO2Emission_Actual_LargeCars;
        this.model.auto.distance = distance;
      }
      //get the public transportations
      const publicTransports = res.filter(result => result !== autoCard);
      //use array to show the first journey by co2
      let arr:Vehicle[] = []
      //calculate multiple journey
      for (let item of publicTransports){
        let publicTransport = new Vehicle();
        console.log(item.legs.map((x:any)=>x.distance));
        //sum of distances
        publicTransport.distance = item.legs
          .map((x:any)=>x.distance)
          .reduce((a:number,c:number)=>{
            // if has distance
            if (!c){
              return a;
            }
            else{
              return a+c;
            }
          });
        //sum of co2
        publicTransport.co2 = item.legs
          .map((x:any)=>x.properties.CO2Emission_Actual_Stadtbahn)
          .reduce((a:number,c:number)=>{
            // if has co2
            if (!c){
              return +a;
            }
            else{
              return (+a)+(+c)
            }
          });
        arr.push(publicTransport);
      }
      if (arr.length>0){
        //get the journey by lowest co2
        arr.sort(x=>x.co2).reverse();
        this.model.publicTransport = arr[0];
      }
      this.isLoading = false;
    })
  }
}
