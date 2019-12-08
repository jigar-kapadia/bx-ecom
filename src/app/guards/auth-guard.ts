import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from '../services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AccountService
    ) { }
    currentUser : any = {};
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         
        this.authenticationService.currentUser.subscribe(user => {
                this.currentUser = user;
        });
        if(this.currentUser)
        {
            if(route.data.roles && route.data.roles.indexOf(this.currentUser.role) === -1){
                this.router.navigate(['/account/login']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/account/login']);
        return false; 
    }


}
