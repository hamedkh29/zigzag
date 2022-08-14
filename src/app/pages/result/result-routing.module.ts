import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {ResultPageComponent} from "./components/result-page/result-page.component";

const routes: Routes = [{
  path: '',
  component: ResultPageComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {
}
