import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { File } from '@ionic-native/file';

@Component({
  selector: 'app-file',
  templateUrl: 'file.component.html'
})

export class FileComponent implements OnInit {

  fileText: string;

  constructor(private file: File) {
  }

  ngOnInit() {
    alert(this.file.dataDirectory);
    this.file.createDir(this.file.dataDirectory, 'testdir', true).then(
      (dir) => {
        alert('base: ' + this.file.dataDirectory);
        this.file.writeFile(this.file.dataDirectory + '/testdir', 'testFile.txt', 'FooBar',
          {replace: true})
          .then((f) => {
            alert('Textdatei erstellt');
          }).catch((error) => {
          alert(error.message);
        });
      });
  }

  loadFile() {
    this.file.readAsText(this.file.dataDirectory + '/testdir', 'testFile.txt')
      .then((loadedFile) => {
        this.fileText = loadedFile;
        alert('loaded ' + this.fileText);
      }).catch(error => {
      alert('Fehler beim lesen der Datei')
    })
  }

  saveFile() {
    alert(this.fileText);
    this.file.writeFile(this.file.dataDirectory + '/testdir', 'testFile.txt', this.fileText,
      {replace: true})
      .then((f) => {
        alert('Textdatei gespeichert');
      }).catch((error) => {
      alert(error.message);
    });
  }
}
