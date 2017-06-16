import { Component, Input } from '@angular/core';

import { ITag } from '../../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input() private tags: ITag[] = [];

  getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

}
