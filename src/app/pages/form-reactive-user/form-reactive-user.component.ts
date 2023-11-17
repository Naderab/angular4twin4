import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-user',
  templateUrl: './form-reactive-user.component.html',
  styleUrls: ['./form-reactive-user.component.css'],
})
export class FormReactiveUserComponent implements OnInit {

  constructor(private fb:FormBuilder){}
  username: FormControl = new FormControl(
    { value: 'username', disabled: false },
    [Validators.required, Validators.minLength(3)]
  );
  userFormBuilder = {};
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl({ value: '', disabled: true }),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl("",[Validators.required, Validators.minLength(3)]),
    }),
    competences: new FormArray([new FormControl('')]),
  });
  get competences(): FormArray {
    return this.userForm.controls['competences'] as FormArray;
  }
  get lastName() {
    return this.userForm.controls['lastName'];
  }
  get street() {
    return this.userForm.controls['address'].get('street');
  }
  ngOnInit() {
    this.competences.controls.forEach((element) => {
      console.log(element);
    });
    console.log(this.competences.controls);
  
  this.userFormBuilder = this.fb.group({
    firstName: [{ value: '', disabled: true }],
    lastName: ['', [
      Validators.required,
      Validators.minLength(3),
    ]],
    address: this.fb.group({
      city: [""],
      street: ['', [
        Validators.required,
        Validators.minLength(3),
      ]],
    }),
    competences: this.fb.array([[""]]),
  });
    
    console.log(this.userFormBuilder);
  }
  addCompetence() {
    this.competences.push(new FormControl(''));
  }

  add() {
    console.log(this.userForm.value);
    console.log(this.userForm.getRawValue());

    
  }
}
