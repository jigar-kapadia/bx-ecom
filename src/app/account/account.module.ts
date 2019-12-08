import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverpasswordComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
