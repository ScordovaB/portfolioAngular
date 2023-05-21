import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  download:string = 'Download CV';
  dlButton:string = 'download';
  constructor(){}

  downloadF(){
    this.download = 'Downloading...';
    this.dlButton = 'downloading';
    setTimeout(()=>{
      this.download='Download CV';
      this.dlButton = 'download';
    },6000);
  }
}
