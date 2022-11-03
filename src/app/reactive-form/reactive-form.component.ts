import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public customerForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl(''),
    fName: new FormControl(''),
    mName: new FormControl(''),
    nid: new FormControl(''),
    address: new FormControl(''),
    pernamentAddress: new FormControl('')
  });

  public onSubmit() {
    this.submit = true;
    console.log("object::", this.customerForm.controls['name'].valid);
    console.log("Is Valid", this.customerForm.valid);
    console.log("profileForm Properties", this.customerForm);
    console.log("profileForm Values", this.customerForm.value);

    if (!this.customerForm.valid) {
      alert("Please check the forms input, validator failed.");
    }

    // TODO

    // hit to the real server

  }

  public submit = false;

  get getFormControl() {
    return this.customerForm.controls;
  }

  public clickedForm() {

    console.log("btn clicked!")
  }


}
