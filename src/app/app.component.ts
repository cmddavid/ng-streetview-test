import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first AGM project';
  lat: number;
  lng: number;
  constructor() {
    setTimeout(() => {
      this.lat = 52.1291206;
      this.lng = 5.4244043;
    }, 5000);
  }
}
