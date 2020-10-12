import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// required for ngx-bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngx-bootstrap component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// services
import { AlertifyService } from './_services/alertify.service';
import { UtilitiesService } from './_services/utilities.service';

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
import { TabsetComponent } from './tabset/tabset.component';

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
    TabsetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [AlertifyService, UtilitiesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
