import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ITag } from '../../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {

  @Input() tags: ITag[] = [];
  @Input() selectedTags: string[] = [];
  @Output() emitTagSelection: EventEmitter<string> = new EventEmitter();

  getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

  selectTag(name) {
    this.emitTagSelection.emit(name);
  }

  checkIfSelected(tagName) {
    return this.selectedTags.find(tag => tag === tagName);
  }

}
