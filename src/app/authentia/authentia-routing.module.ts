import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentiaPage } from './authentia.page';

const routes: Routes = [
  {
    path: '',
    component: AuthentiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentiaPageRoutingModule {}
