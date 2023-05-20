import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendText:string ='Send';

  constructor(){

  }
  

  send(){
    this.sendText = 'Sending...';
    setTimeout(()=>{
      this.sendText='Send';
    },3000);
  }
}
