import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userRegisterForm: FormGroup;
  constructor() {
    this.userRegisterForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z]{3,10}$'),
      ]),
      email: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
      }),
      phoneNums: new FormArray([new FormControl('')]),
    });
  }
  register() {
    console.log('hello');
  }
  get name() {
    return this.userRegisterForm.get('name');
  }
  get phones() {
    return this.userRegisterForm.get('phoneNums') as FormArray;
  }
  addNewPhone() {
    this.phones.push(new FormControl('  '));
  }
  removePhone(index: number) {
    this.phones.removeAt(index);
  }
}
