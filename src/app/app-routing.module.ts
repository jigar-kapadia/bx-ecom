import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {Role} from './models/role'
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  { path : 'account', loadChildren : () => import('./account/account.module').then(x => x.AccountModule) },
  { path : '', component : HomeComponent , canActivate : [AuthGuard]},
  {path : 'admin', loadChildren : () => import('./admin/admin.module').then(x => x.AdminModule), data : { roles : [Role.Admin]}, canActivate : [AuthGuard] },
  {path : 'home', component : HomeComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
