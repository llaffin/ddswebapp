import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  public appPages = [
    { title: 'Athlete Profile', url: '/athlete-profile', icon: 'person' },
    { title: 'Programming', url: '/programming', icon: 'book' },
    { title: 'Training Analysis', url: '/training-analysis', icon: 'bar-chart' },
    { title: 'Bodyweight Log', url: '/bodyweight-log', icon: 'scale' },
    { title: 'Check-In', url: '/check-in', icon: 'clipboard' },
    { title: 'RPE Tables', url: '/rpe-tables', icon: 'tablet-landscape' },
    { title: 'Attempt Selections', url: '/attempt-selections', icon: 'barbell' },
    { title: 'Notes', url: '/notes', icon: 'pencil' }
  ];

  constructor() {}
}
