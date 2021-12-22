import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Athlete Profile', url: '/folder/athleteprofile/athleteprofile', icon: 'person' },
    { title: 'Programming', url: '/folder/programming/programming', icon: 'book' },
    { title: 'Training Analysis', url: '/folder/traininganalysis/traininganalysis', icon: 'bar-chart' },
    { title: 'Bodyweight Log', url: '/folder/bodyweightlog/bodyweightlog', icon: 'scale' },
    { title: 'Check-In', url: '/folder/checkin/checkin', icon: 'clipboard' },
    { title: 'RPE Tables', url: '/folder/rpetables/rpetables', icon: 'tablet-landscape' },
    { title: 'Attempt Selection', url: '/folder/attemptselections/attemptselections', icon: 'barbell' },
    { title: 'Notes', url: '/folder/notes/notes', icon: 'pencil' }
  ];

  constructor() {}
}
