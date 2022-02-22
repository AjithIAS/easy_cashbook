import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyEmaiPage } from './verify-emai.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyEmaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyEmaiPageRoutingModule {}
