import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuertesCovidComponent } from './muertes-covid/muertes-covid.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import {PastenotfoundComponent} from'./pastenotfound/pastenotfound.component'

const routes: Routes = [
  {path: 'presentacion-component', component:PresentacionComponent},
  {path: 'muertes-covid-component', component:MuertesCovidComponent},
  {path: '**',component:PastenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
