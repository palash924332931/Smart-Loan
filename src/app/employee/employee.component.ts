import { Component, OnInit,OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("ng on int");
  }

  ngOnChanges(): void{
    console.log("ng on ngOnChanges");

  }

  ngOnDestroy(){
    console.log('Items destroyed');
    alert("ngOnDestroy");

  }

  ngDoCheck(){

    console.log('Items ngDoCheck');
  }







  empForm: IEmp = { id: 0, firstName: "", lastName: "", password: "", email: "" };

  public submitted: boolean = false;
  public onSubmit() {
    this.submitted = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.empForm))
  }



}

interface IEmp {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

