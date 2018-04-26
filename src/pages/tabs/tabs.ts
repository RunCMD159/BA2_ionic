import { Component } from '@angular/core';

import { NativeHardwareTestPage } from '../native-hardware-test/native-hardware-test';
import { HomePage } from '../home/home';
import { PerformancePage } from '../performance/performance';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerformancePage;
  tab3Root = NativeHardwareTestPage;

  constructor() {

  }
}
