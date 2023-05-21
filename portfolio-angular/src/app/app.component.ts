import { Component} from '@angular/core';

// import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
// import { slideIn} from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // ,
  // animations: [
  //   slideIn
  // ]
})
export class AppComponent {
  title = 'portfolio-angular';

  constructor(
    // private contexts:ChildrenOutletContexts
    ) {}

  // prepareRoute(outlet:RouterOutlet){
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
  // prepareRoute(outlet:RouterOutlet){
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  //   // return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }
}
