import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { FloatComponent } from './float/float.component';
import { ModalComponent } from './modal/modal.component';
import { TableComponent } from './table/table.component';
import { AlertComponent } from './alert/alert.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { TabsetComponent } from './tabset/tabset.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'grid',
        component: GridComponent,
      },
      {
        path: 'float',
        component: FloatComponent,
      },
      {
        path: 'modal',
        component: ModalComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'alert',
        component: AlertComponent,
      },
      {
        path: 'scrollspy',
        component: ScrollspyComponent,
      },
      {
        path: 'tabset',
        component: TabsetComponent,
      }  ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
