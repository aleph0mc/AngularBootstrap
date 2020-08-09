import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { AlertifyService } from './_services/alertify.service';

import { ScrollspyDirective } from './scrollspy/scrollspy.directive';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { FloatComponent } from './float/float.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { AlertComponent } from './alert/alert.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { LoremIpsumComponent } from './scrollspy/lorem-ipsum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    GridComponent,
    FloatComponent,
    ModalComponent,
    TableComponent,
    AlertComponent,
    ScrollspyComponent,
    ScrollspyDirective,
    LoremIpsumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
