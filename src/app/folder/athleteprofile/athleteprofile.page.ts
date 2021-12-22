import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-athleteprofile',
  templateUrl: './athleteprofile.page.html',
  styleUrls: ['./athleteprofile.page.scss'],
})
export class AthleteprofilePage implements OnInit {

  loading: any;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private navCtr: NavController,
    private menuCtrl: MenuController) {
    this.loading = this.loadingCtrl;
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }

  logout() {
    //this.showalert();
    this.authservice.logoutFireAuth();
    //this.loading.dismiss();
    this.router.navigate(['login']);
  }

  async showalert() {
    var load = await this.loading.create({
      message: "Logging out..."
    })
    load.present();
  }

  async errorLoading(message: any) {
    const loading = await this.alertCtrl.create({
      header: "Error Logging Out",
      message: message,
      buttons: [{
        text: 'ok',
        handler: () => {
          this.navCtr.navigateBack(['athlete-profile'])
        }
      }]
    })
    await loading.present();
  }
}
