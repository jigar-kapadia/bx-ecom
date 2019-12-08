import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService : AccountService,
              private router : Router
    ) { }
  model : any = {};
  ngOnInit() {
  }

  onSubmit()
  {
    this.accountService.login(this.model).subscribe(
      res => {
        //this.
        console.log(res)
        if(res && res.id != undefined)
        {
          if(res.role === 'User')
            this.router.navigate(['/home']);
          if(res.role === 'Admin')
            this.router.navigate(['/admin/dashboard'])
        }
      }
    );
  }
}
