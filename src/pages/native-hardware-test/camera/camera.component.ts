import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera";

@Component({
  selector: 'app-camera',
  templateUrl: 'camera.component.html'
})

export class CameraComponent implements OnInit {

  public base64Image: string;
  constructor(private camera: Camera) {
  }

  ngOnInit() {

  }

  takePicture(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
