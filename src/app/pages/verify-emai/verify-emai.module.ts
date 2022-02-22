import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyEmaiPageRoutingModule } from './verify-emai-routing.module';

import { VerifyEmaiPage } from './verify-emai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyEmaiPageRoutingModule
  ],
  declarations: [VerifyEmaiPage]
})
export class VerifyEmaiPageModule {}
