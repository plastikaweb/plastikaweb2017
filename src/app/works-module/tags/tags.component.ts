import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ImagesService } from '../../shared/images-service/images.service';
import { ITag } from '../../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {

  @Input() filtering: true;
  @Input() tags: ITag[] = [];
  @Input() selectedTags: string[] = [];
  @Output() emitTagSelection: EventEmitter<string> = new EventEmitter();
  imagesService = ImagesService;

  selectTag(name) {
    this.emitTagSelection.emit(name);
  }

  checkIfSelected(tagName) {
    return this.selectedTags.find(tag => tag === tagName);
  }

}
