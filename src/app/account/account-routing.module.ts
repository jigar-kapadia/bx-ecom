import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';


const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent },
  { path : 'recoverpassword', component : RecoverpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
