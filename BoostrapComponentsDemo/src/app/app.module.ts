import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services
import { AlertifyService } from './_services/alertify.service';

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
      ScrollspyComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ModalModule.forRoot()
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
