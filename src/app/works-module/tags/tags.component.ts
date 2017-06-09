import { Component, Input, OnInit } from '@angular/core';
import { ITag } from '../../models/tag.model';
import { TagsService } from '../../shared/tags-service/tags.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() private workKey;
  tags$: Observable<ITag[]>;

  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    this.tags$ = this.tagsService.findTagsByWork(this.workKey);
  }

  getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

}
