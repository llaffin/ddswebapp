import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Athlete Profile', url: '/folder/athleteprofile', icon: 'person' },
    { title: 'Programming', url: '/folder/programming', icon: 'book' },
    { title: 'Training Analysis', url: '/folder/traininganalysis', icon: 'bar-chart' },
    { title: 'Bodyweight Log', url: '/folder/bodyweightlog', icon: 'scale' },
    { title: 'Check-In', url: '/folder/checkin', icon: 'clipboard' },
    { title: 'RPE Tables', url: '/folder/rpetables', icon: 'tablet-landscape' },
    { title: 'Attempt Selection', url: '/folder/attemptselections', icon: 'barbell' },
    { title: 'Notes', url: '/folder/notes', icon: 'pencil' }
  ];

  constructor() {}
}
