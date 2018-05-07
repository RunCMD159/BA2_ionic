import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'app-location',
  templateUrl: 'location.component.html'
})

export class LocationComponent implements OnInit {

  latitude: any;
  longitude: any;

  constructor(private geolocation: Geolocation, private platform: Platform) {
  }

  ngOnInit() {
  }

  public getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.longitude;
      this.longitude = resp.coords.latitude;
      alert(resp.coords.longitude)
    }).catch((error) => {
      alert(error.code + " " + error.message);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.latitude = data.coords.longitude;
      this.longitude = data.coords.latitude;
    });
  }
}
