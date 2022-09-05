import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassChangePageRoutingModule } from './pass-change-routing.module';

import { PassChangePage } from './pass-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassChangePageRoutingModule
  ],
  declarations: [PassChangePage]
})
export class PassChangePageModule {}
