import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewOrdersComponent } from "./new-orders/new-orders.component";
import { OrderListComponent } from "./order-list/order-list.component";

const routes: Routes = [
  { path: "", component: OrderListComponent },
  { path: "new", component: NewOrdersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
