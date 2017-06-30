import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-works',
  templateUrl: './filter-works.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterWorksComponent implements OnInit {

  @Input() tags: string[] = [];

  /**
   * received tag externally; if exists in model delete
   * otherwise add to the model
   * @param tag
   */
  @Input() set receiveTag(tag: string) {
    if (tag) {
      if (this.stringsModel.indexOf(tag) < 0) {
        this.stringsModel = [...this.stringsModel, tag];
      } else {
        this.stringsModel = this.stringsModel.filter(item => item !== tag);
      }
      this.filterStrings(tag);
    }
  };
  @Output() filterBy: EventEmitter<string[]> = new EventEmitter();

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

}
