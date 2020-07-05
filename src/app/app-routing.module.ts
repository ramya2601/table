import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
{
  path:'employeelist',component:EmployeelistComponent
},
{
path:'employeeedit',component:EmployeeeditComponent
},
{
  path:'update',component:UpdateComponent

},
{ path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
