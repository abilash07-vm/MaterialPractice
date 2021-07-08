import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component'
import { CustomerCardComponent } from './customer-card/customer-card.component'
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  { path: '' , component: CustomersListComponent },
  { path: 'info', component: CustomerCardComponent },
  { path: 'new' , component: NewCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
