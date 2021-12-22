import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  validationUserMessage = {
    name: [
      { type: "required", message: "Please enter your name." }
    ],
    email: [
      { type: "required", message: "Please enter your email." },
      { type: "pattern", message: "The email entered is incorrect. Please try again." }
    ],
    password: [
      { type: "required", message: "Please enter your password." },
      { type: "minlength", message: "Password must be at least 8 characters." },
      { type: "pattern", message: "Password must contain at least 1 Upper Case Latter and 1 number." }
    ],
    password2: [
      { type: "required", message: "Please re-enter your password." },
      { type: "minlength", message: "Password must be at least 8 characters." }
    ]
  }

  validationFormUser: FormGroup;
  loading: any;


  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private navCtr: NavController,
    private menuCtrl: MenuController) {
    this.loading = this.loadingCtrl;
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])$')
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])$')
      ]))
    }, {
      validator: SignupPage.passwordsMatch
    })
  }

  RegisterUser(value) {
    this.showalert();
    try {
      this.authservice.registerFireAuth(value).then(resp => {
        console.log("success: " + resp);
        if (resp.user) {
          resp.user.updateProfile({
            displayName: value.name,
            email: value.email
          });
          this.loading.dismiss();
          this.menuCtrl.enable(true);
          this.router.navigate(['athlete-profile'])
        }
      }, error => {
        this.loading.dismiss();
        this.errorLoading(error.message);
      })
    } catch (err) {
      console.log("error: " + err);
    }
  }

  async showalert() {
    var load = await this.loading.create({
      message: "please wait..."
    })
    load.present();
  }

  async errorLoading(message: any) {
    const loading = await this.alertCtrl.create({
      header: "Error Registering",
      message: message,
      buttons: [{
        text: 'ok',
        handler: () => {
          this.navCtr.navigateBack(['signup'])
        }
      }]
    })
    await loading.present();
  }

  static passwordsMatch(cg: FormGroup): { [err: string]: any } {
    let password = cg.get('password');
    let password2 = cg.get('password2');
    let rv: { [error: string]: any } = {};
    if ((password.touched || password2.touched) && password.value !== password2.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;
  }
}
