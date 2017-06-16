import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ITag } from '../../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {

  @Input() tags: ITag[] = [];

  getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

}
