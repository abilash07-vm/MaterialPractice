import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component'
import { CustomerCardComponent } from './customer-card/customer-card.component'

const routes: Routes = [
  { path: '' , component: CustomersListComponent },
  { path: 'info', component: CustomerCardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
