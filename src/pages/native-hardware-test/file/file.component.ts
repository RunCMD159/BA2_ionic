import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file';

@Component({
  selector: 'app-file',
  templateUrl: 'file.component.html'
})

export class FileComponent implements OnInit {
  constructor(private file: File) {
    this.file.checkDir(this.file.dataDirectory, 'mydir')
      .then(_ => alert('Directory exists'))
      .catch(err => alert('Directory doesn\'t exist'));

  }

  ngOnInit() {
  }
}
