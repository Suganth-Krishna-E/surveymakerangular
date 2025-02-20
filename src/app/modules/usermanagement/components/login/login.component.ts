import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  constructor() {
    this.loginFormGroup = new FormGroup({
      id: new FormControl('', []),
      password: new FormControl('', [])
    });
  }

  onSubmitLogin() {
    
  }
}
