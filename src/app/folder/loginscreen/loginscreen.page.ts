import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  validationUserMessage = {
    email: [
      { type: "required", message: "Please enter your email." },
      { type: "pattern", messagee: "The email entered is incorrect. Please try again." }
    ],
    password: [
      { type: "required", message: "Please enter your password." },
      { type: "minlength", message: "Password must be at least 6 characters." }
    ]
  }

  validationFormUser: FormGroup;
  constructor(public formBuilder: FormBuilder, public authservice: AuthService) { }

  LoginUser(value) {
    try {
      this.authservice.loginFireAuth(value).then(resp => {
        console.log("success: " + resp);
      })
    } catch (err) {
      console.log("error: " + err);
    }
  }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

}
