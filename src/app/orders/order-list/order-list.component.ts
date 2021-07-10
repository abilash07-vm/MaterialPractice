import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { PageEvent } from "@angular/material/paginator";

interface Order {
  orderDate: Date;
  orderNumber: number;
  total: number;
  description: string;
  isChecked: boolean;
}

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"],
})
export class OrderListComponent implements OnInit, AfterViewInit {
  dummyData = [
    {
      orderDate: new Date(),
      orderNumber: 100,
      total: 29.99,
      description: "2lbs of tuna",
      isChecked: false,
    },
    {
      orderDate: new Date(),
      orderNumber: 101,
      total: 39.99,
      description: "5lbs of tuna",
      isChecked: false,
    },
    {
      orderDate: new Date(),
      orderNumber: 102,
      total: 59.99,
      description: "1lbs of tuna",
      isChecked: false,
    },
    {
      orderDate: new Date(),
      orderNumber: 103,
      total: 39.99,
      description: "5lbs of tuna",
      isChecked: false,
    },
    {
      orderDate: new Date(),
      orderNumber: 104,
      total: 59.99,
      description: "1lbs of tuna",
      isChecked: false,
    },
  ];
  ELEMENT_DATA: Order[] = [];

  displayedColumns: string[] = [
    "action",
    "orderNumber",
    "orderDate",
    "description",
    "total",
  ];
  length = this.ELEMENT_DATA.length;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15, 20];

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  loadData() {
    this.dataSource.data = this.ELEMENT_DATA.slice(
      this.pageIndex,
      this.pageIndex + this.pageSize
    );
  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.ELEMENT_DATA = this.ELEMENT_DATA.concat(this.dummyData);
    }
    this.loadData();
    this.length = this.ELEMENT_DATA.length;
  }
  selectAll() {
    for (var ele of this.ELEMENT_DATA) {
      ele.isChecked = !ele.isChecked;
    }
  }

  onPageChange(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loadData();
  }
}
