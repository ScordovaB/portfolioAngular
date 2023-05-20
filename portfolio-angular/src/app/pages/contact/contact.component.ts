import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendText:string ='Send';
  thanksMessage:string = '';

  constructor(){

  }
  

  send(){
    this.sendText = 'Sending...';
    setTimeout(()=>{
      this.thanksMessage='Thanks for your message!';
      this.sendText='Send';
    },3000);
    this.thanksMessage='';
  }
}
