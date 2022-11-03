import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../services/registration.service';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-btable',
  templateUrl: './btable.component.html',
  styleUrls: ['./btable.component.css']
})
export class BtableComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  public postsData: any[] = [];
  ngOnInit(): void {

    this.getFakeData();

  }

  public getFakeData() {

    this.registrationService.getData().subscribe(res => {
      

      this.postsData = res;
    });
  }

  public viewDetails(id: number) {
    this.registrationService.getDataById(id).subscribe(res => {
      console.log("result:: ", res);
    });
  }

  public savePost() {
    let postObj = { body: "test", title: "Test Title", userId: 2 };

    // form.value
    this.registrationService.postData(postObj).subscribe(res => {

      console.log("success:: ", res );

    },
      err => {
        console.log("Fetching error to push data", err);
      });

  }


  public putPost() {
    let postObj = { body: "test", title: "Test Title", userId: 1, id: 1 };

    // form.value
    this.registrationService.putData(postObj).subscribe(res => {

      console.log("success:: ", res);
      this.getFakeData();

    },
      err => {
        console.log("Fetching error to push data", err);
      });

  }

 

}
