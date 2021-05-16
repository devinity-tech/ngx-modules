import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PillModule } from '@devinity-tech/ngx-modules/src/lib/pill';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
