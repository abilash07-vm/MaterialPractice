import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup=this.formBuilder.group({
      emailctrl: ['', Validators.required]
    });
    this.secondFormGroup=this.formBuilder.group({
      messagectrl: ['', Validators.required]
    });
  }

}
