import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PagesComponent} from "./pages.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'start',
      loadChildren: () => import('./start/start.module')
        .then(m => m.StartModule),
    },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
    {
      path: 'result/:originId/:destinationId',
      loadChildren: () => import('./result/result.module')
        .then(m => m.ResultModule),
    },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
