import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuertesCovidComponent } from './muertes-covid/muertes-covid.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import { PastenotfoundComponent } from './pastenotfound/pastenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MuertesCovidComponent,
    PresentacionComponent,
    CabezeraComponent,
    PastenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
