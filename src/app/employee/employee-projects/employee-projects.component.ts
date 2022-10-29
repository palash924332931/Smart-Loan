import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-employee-projects',
  templateUrl: './employee-projects.component.html',
  styleUrls: ['./employee-projects.component.css']
})
export class EmployeeProjectsComponent implements OnInit {
  @Input() selectedEmp: any;

  @Output() updatedEvent = new EventEmitter<IEmp>();

  constructor() { }

  ngOnInit(): void {
  }

  public updateEmployee(employeeObj: IEmp) {

    employeeObj.name = `${employeeObj.name} - updated`
    console.log("employeeObj updated::", employeeObj);

    this.updatedEvent.emit(employeeObj);
  }

}

interface IEmp {
  id: number;
  name: string;
}
