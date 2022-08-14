import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {StartPageComponent} from "./components/start-page/start-page.component";

const routes: Routes = [{
  path: '',
  component: StartPageComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule {
}