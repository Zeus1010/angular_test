import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpDetailComponent} from './emp-detail/emp-detail.component';
import {EmpFormComponent} from './emp-form/emp-form.component'

const routes: Routes = [
  {path: '', component:EmpFormComponent},
  {path: 'detail', component:EmpDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
