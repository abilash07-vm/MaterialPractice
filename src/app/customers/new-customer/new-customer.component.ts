import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { SampleDialogComponent } from "../sample-dialog/sample-dialog.component";

@Component({
  selector: "app-new-customer",
  templateUrl: "./new-customer.component.html",
  styleUrls: ["./new-customer.component.css"],
})
export class NewCustomerComponent implements OnInit {
  emailctrl: FormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  emailerror = new ErrorStateMatcher();
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialog = this.dialog.open(SampleDialogComponent, {
      width: "200px",
      data: {},
    });

    dialog.afterClosed().subscribe((data) => {
      alert(`choosen ${data}`);
    });
  }
}
