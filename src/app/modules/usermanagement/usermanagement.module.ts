import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { UsermanagementhomeComponent } from './components/usermanagementhome/usermanagementhome.component';
import { LoginComponent } from './components/login/login.component';
import { CreateuserComponent } from './components/createuser/createuser.component';


@NgModule({
  declarations: [
    UsermanagementhomeComponent,
    LoginComponent,
    CreateuserComponent
  ],
  imports: [
    CommonModule,
    UsermanagementRoutingModule
  ]
})
export class UsermanagementModule { }
