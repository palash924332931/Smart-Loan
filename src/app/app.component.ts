import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular';
  public topicName = "Angular Session"
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
}
