import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { NativeHardwareTestPage } from '../pages/native-hardware-test/native-hardware-test';
import { PerformancePage } from '../pages/performance/performance';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraComponent } from '../pages/native-hardware-test/camera/camera.component';
import { LocationComponent } from '../pages/native-hardware-test/location/location.component';
import { FileComponent } from '../pages/native-hardware-test/file/file.component';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { File } from '@ionic-native/file'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerformancePage,
    NativeHardwareTestPage,
    TabsPage,
    CameraComponent,
    LocationComponent,
    FileComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PerformancePage,
    NativeHardwareTestPage,
    CameraComponent,
    LocationComponent,
    FileComponent,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    AndroidPermissions,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
