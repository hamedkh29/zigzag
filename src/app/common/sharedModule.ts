import {NgModule} from "@angular/core";
import {MeterToKilometerPipe} from "../pipes/meter-to-kilometer.pipe";

@NgModule({
  declarations: [MeterToKilometerPipe],
  // using exports to access the component/pipe in other modules
  exports: [MeterToKilometerPipe]
})
export class SharedModule{}
