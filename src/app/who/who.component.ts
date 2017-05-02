import { Component, OnInit } from '@angular/core';
import {
  TdDataTableService,
  TdDataTableSortingOrder,
  ITdDataTableColumn,
  ITdDataTableSortChangeEvent
} from '@covalent/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: [ './who.component.scss' ]
})
export class WhoComponent implements OnInit {
  data: any[] = [
    { skill: 'angular', years: '1', proficiency: 70 },
    { skill: 'javascript', years: '7', proficiency: 85 },
    { skill: 'CSS3', years: '5', proficiency: 80 },
    { skill: 'Sass', years: '3', proficiency: 70 },
    { skill: 'HTML5', years: '7', proficiency: 70 }
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'skill', label: 'skill', tooltip: 'skill / technology' },
    { name: 'years', label: 'years', numeric: true },
    { name: 'proficiency', label: 'proficiency', numeric: true },
  ];

  filteredData: any[] = this.data;
  sortBy = 'skill';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private dataTableService: TdDataTableService) {}

  ngOnInit(): void {
    this.filter();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    newData = this.dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    this.filteredData = newData;
  }
}
