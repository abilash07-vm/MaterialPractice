import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-new-orders",
  templateUrl: "./new-orders.component.html",
  styleUrls: ["./new-orders.component.css"],
})
export class NewOrdersComponent implements OnInit {
  mindate = new Date();
  datectrl: FormControl = new FormControl("", [Validators.required]);

  constructor() {}

  ngOnInit(): void {}
}
