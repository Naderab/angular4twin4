import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-reactive-user',
  templateUrl: './form-reactive-user.component.html',
  styleUrls: ['./form-reactive-user.component.css'],
})
export class FormReactiveUserComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder,private userService:UserService,private router:Router){}
  id: number = 0;
  username: FormControl = new FormControl(
    { value: 'username', disabled: false },
    [Validators.required, Validators.minLength(3)]
  );
  userFormBuilder = {};
  userFormB : FormGroup = new FormGroup({});
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
  // get lastName() {
  //   return this.userForm.controls['lastName'];
  // }
  get street() {
    return this.userForm.controls['address'].get('street');
  }

  get lastName() {
    return this.userFormB.controls['lastName'];
  }
  get birthDate() {
    return this.userFormB.controls['birthDate']
  }
  get email() {
    return this.userFormB.controls['email']
  }
  get password() {
    return this.userFormB.controls['password']
  }

  get profession() {
    return this.userFormB.controls['profession']
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>this.id = param['id'])
    this.competences.controls.forEach((element) => {
      console.log(element);
    });
    console.log(this.competences.controls);
    this.id !== undefined && 
      this.userService.fetchUserById(this.id).subscribe({
        next: (data) => {
          this.userFormB.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
            birthDate: data.birthDate,
            email: data.email,
            password: data.password,
            accountCategory: data.accountCategory,
            profession:data.profession
          })
      }
    })
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

    this.userFormB = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '([a-zA-Z0-9._-]+@gmail.com|[a-zA-Z0-9._-]+@esprit.tn)'
          ),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}?')],
      ],
      birthDate: ["", [Validators.required]],
      profession: ["", [Validators.required]],
      accountCategory: [{ value: "Customer", disabled: true }]
    });
  }
  addCompetence() {
    this.competences.push(new FormControl(''));
  }

  add() {
    console.log(this.userForm.value);
    console.log(this.userForm.getRawValue());
    if (this.id !== undefined) {
      this.userService.updateUser(this.userFormB.getRawValue(), this.id).subscribe({
        next: () => this.router.navigate(['/user/list']),
      });
    }
    else {
      this.userFormB.getRawValue().picture =
        'https://bootdey.com/img/Content/avatar/avatar3.png';
      this.userService.addUser(this.userFormB.getRawValue()).subscribe({
        next: () => this.router.navigate(['/user/list']),
      });
    }
  }
}
