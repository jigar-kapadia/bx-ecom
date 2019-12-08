import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MustMatch} from './../../helpers/must-match'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        userName : ['',[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        email : ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)], Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')],
        confirmPassword: ['', Validators.required],
        firstName : ['', Validators.required],
        lastName : ['', Validators.required],

    },
    {
      validators : MustMatch('password', 'confirmPassword')
    })
  }

  onSubmit()
  {
this.submitted = true
  }

  get f() { return this.registerForm.controls; }  

}
