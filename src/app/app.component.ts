import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor() {
  }



  title = 'ngifAnimation';
  showImage = false;
  onClick() {
    this.showImage = !this.showImage;
  }

}
