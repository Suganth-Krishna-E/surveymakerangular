import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementhomeComponent } from './components/usermanagementhome/usermanagementhome.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: UsermanagementhomeComponent,
  },
  {
    path: 'createuser',
    component: CreateuserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule { }
