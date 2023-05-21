import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navButton:string='menu';
  navClass:string ='navbar';

  constructor(){}

  navClick(){
    if(this.navButton=='menu'){
      this.navButton ='close';
    }else{
      this.navButton ='menu';
    }
    //navbar class change
    if(this.navClass=='navbar'){
      this.navClass ='navbar active';
    }else{
      this.navClass ='navbar';
    }

  }

}
