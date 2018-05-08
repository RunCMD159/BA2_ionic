import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file';

@Component({
  selector: 'app-file',
  templateUrl: 'file.component.html'
})

export class FileComponent implements OnInit {
  constructor(private file: File) {
  }

  ngOnInit() {

    this.file.createDir(this.file.dataDirectory, 'testdir', true).then(
      (dir) => {
        alert('base: ' + this.file.dataDirectory);
        this.file.writeFile(this.file.dataDirectory + '/testdir', 'testFile.txt', 'FooBar')
          .then((f) => {
            alert(f);
            alert('Textdatei erstellt');
          }).catch((error) => {
          alert(error.message);
        });
      });
  }
}
