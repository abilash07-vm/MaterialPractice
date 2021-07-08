import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { CustomerCardComponent } from "./customer-card/customer-card.component";
import { NewCustomerComponent } from "./new-customer/new-customer.component";
import { SampleDialogComponent } from "./sample-dialog/sample-dialog.component";

// Material
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    CustomersListComponent,
    CustomerCardComponent,
    NewCustomerComponent,
    SampleDialogComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
  ],
  entryComponents: [SampleDialogComponent],
})
export class CustomersModule {}
