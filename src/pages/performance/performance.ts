import { AfterViewChecked, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerformanceService } from './performance.service';

@Component({
  selector: 'page-performance',
  templateUrl: 'performance.html',
  providers: [PerformanceService]
})
export class PerformancePage implements AfterViewChecked {

  performanceData: any = [];
  runningTime: number;

  private isPerformanceTestRunning: boolean = false;
  //time in milliseconds
  private startTime: number;
  //time in milliseconds
  private endTime: number;


  constructor(public navCtrl: NavController,
              private performanceService: PerformanceService) {

  }

  ngAfterViewChecked(): void {
    if (this.isPerformanceTestRunning) {
      this.endTime = new Date().getTime();
      console.log('Performance Test has ended');
      this.runningTime = this.endTime - this.startTime;
      console.log(this.runningTime);
    }
  }

  runPerformanceTest() {
    this.runWarmUpPhase();
    console.log('WarmUp Phase 1 has ended');
    this.runWarmUpPhase();
    console.log('WarmUp Phase 2 has ended');

    this.performanceData = [];
    this.isPerformanceTestRunning = true;
    this.performanceService.runPerformanceTest().subscribe((perfData) => {
      console.log('Performance Test Started');
      this.startTime = new Date().getTime();
      this.performanceData = perfData;
    })
  }

  runWarmUpPhase() {
    this.performanceService.runWarmUpPhase().subscribe((warmUpData) => {
      console.log('WarmUp Phase Started');
      this.performanceData = warmUpData;
    })
  }


}
