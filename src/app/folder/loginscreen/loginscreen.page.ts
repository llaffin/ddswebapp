import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';
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
      { type: "pattern", message: "The email entered is incorrect. Please try again." }
    ],
    password: [
      { type: "required", message: "Please enter your password." },
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


  LoginUser(value) {
    this.showalert();
    try {
      this.authservice.loginFireAuth(value).then(resp => {
        console.log("success: " + resp);
        this.loading.dismiss();
        this.menuCtrl.enable(true);
        this.router.navigate(['athlete-profile'])
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
      message: "Loggin in..."
    })
    load.present();
  }

  async errorLoading(message: any) {
    const loading = await this.alertCtrl.create({
      header: "Error Logging In",
      message: message,
      buttons: [{
        text: 'ok',
        handler: () => {
          this.navCtr.navigateBack(['login'])
        }
      }]
    })
    await loading.present();
  }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

}
