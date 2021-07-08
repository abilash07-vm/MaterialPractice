import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Department{
  id: Number,
  name: string
}

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;

  priorities:String[]=['low','medium','high']
  departments:Department[]=[
    {
      id: 1,
      name: "Electrical"
    },
    {
      id: 2,
      name: "IT"
    },
    {
      id: 3,
      name: "Mech"
    }
  ]

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup=this.formBuilder.group({
      emailctrl: ['', Validators.required],
      priorityctrl: ['',Validators.required],
      departmentctrl: ['',Validators.required]
    });
    this.secondFormGroup=this.formBuilder.group({
      messagectrl: ['', Validators.required]
    });
  }

  getDepartmentName(dept:Department){
    return dept["name"];
  }

}
