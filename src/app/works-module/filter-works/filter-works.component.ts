import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-works',
  templateUrl: './filter-works.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterWorksComponent implements OnInit {

  @Input() tags: string[] = [];
  @Output() filterBy: EventEmitter<string[]> = new EventEmitter();
  @Output() selectedChip: EventEmitter<string> = new EventEmitter();
  chipAddition = true;
  chipRemoval = true;
  chipColor = 'warn';
  filteredStrings: string[];
  stringsModel: string[] = this.tags.slice(0, 6);

  ngOnInit(): void {
    this.filterStrings('');
  }

  filterStrings(value: string): void {
    this.filteredStrings = this.tags.filter((item: any) => {
      if (value) {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      }
      return false;

    }).filter((filteredItem: any) => this.stringsModel ?
      this.stringsModel.indexOf(filteredItem) < 0 : true
    );

    this.filterBy.emit(this.stringsModel);
  }

  onClick(e) {
    this.selectedChip.emit(e.srcElement.innerText.slice(2));
  }

}
