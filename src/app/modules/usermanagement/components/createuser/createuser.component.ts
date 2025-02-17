import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent{
  createUserFormGroup: FormGroup;

  constructor() {
    this.createUserFormGroup = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', []),
      email: new FormControl('', []),
      pincode: new FormControl('', []),
      password: new FormControl('', []),
      confirmPassword: new FormControl('', [])
    });
  }

  onSubmitCreateUser() {
    console.log(this.createUserFormGroup);
  }

}
