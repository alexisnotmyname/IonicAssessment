import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalbuyPageRoutingModule } from './modalbuy-routing.module';

import { ModalbuyPage } from './modalbuy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalbuyPageRoutingModule
  ],
  declarations: [ModalbuyPage]
})
export class ModalbuyPageModule {}
