import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerformanceService } from './performance.service';

@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html',
  providers: [PerformanceService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PerformancePage implements AfterViewChecked {

  performanceData: any = [];
  runningTime: number = 0;
  data = [];

  private isPerformanceTestRunning: boolean = false;
  //time in milliseconds
  private startTime: number;
  //time in milliseconds
  private endTime: number;


  constructor(public navCtrl: NavController,
              private performanceService: PerformanceService,
              private changeDetector: ChangeDetectorRef) {
  }


  ngAfterViewChecked(): void {
    if (this.isPerformanceTestRunning) {
      this.endTime = new Date().getTime();
      console.log('Performance Test has ended');
      this.runningTime = this.endTime - this.startTime;
      console.log(this.runningTime);
      this.changeDetector.markForCheck();
      this.changeDetector.detectChanges();
    }
  }

  ionViewDidEnter() {
    this.resetFields();
    for (let i = 0; i < 10000; i++) {
      this.data.push('TestString' + Math.floor((Math.random() * 10000) + 1));
    }
    this.isPerformanceTestRunning = false;
  }

  private resetFields() {
    this.performanceData = [];
    this.data = [];
    this.changeDetector.markForCheck();
    this.changeDetector.detectChanges();
    this.runningTime = 0;
  }

  ionViewDidLeave() {
   this.resetFields();
  }

  runPerformanceTest() {

    this.performanceData = [];
    this.runningTime = 0;
    this.isPerformanceTestRunning = true;
    this.performanceService.runPerformanceTest(this.data).subscribe((perfData) => {
      console.log('Performance Test Started');
      this.startTime = new Date().getTime();
      this.performanceData = perfData;
    })
  }


}
