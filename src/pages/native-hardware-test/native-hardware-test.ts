import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'page-native-hardware-test',
  templateUrl: 'native-hardware-test.html'
})
export class NativeHardwareTestPage {

  constructor(public navCtrl: NavController,
              private androidPermissions: AndroidPermissions) {
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA,
      this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
      this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
      this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]
    );


  }

}
