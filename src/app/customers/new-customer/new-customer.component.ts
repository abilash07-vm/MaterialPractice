import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { SampleDialogComponent } from "../sample-dialog/sample-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

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
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

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
  openSnackBar() {
    const saveSnackBar = this.snackBar.open("saving changes ...", "UNDO", {
      duration: 3000,
      horizontalPosition: "right",
    });
    saveSnackBar.onAction().subscribe(() => {
      alert("Changes undone...");
    });
  }
}
