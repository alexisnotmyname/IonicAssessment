import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalbuyPage } from './modalbuy.page';

const routes: Routes = [
  {
    path: '',
    component: ModalbuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalbuyPageRoutingModule {}
