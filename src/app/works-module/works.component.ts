import {
  ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit,
  Renderer2
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { IWork, ITranslation } from '../models/work.model';
import { fadeAnimation } from '../animations/fade.animation';
import { WorksService } from '../shared/shared.module';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: [ './works.component.scss' ],
  animations: [ fadeAnimation ]
})
export class WorksComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  works$: Observable<IWork[]>;
  loadingImage = 'assets/images/background.jpg';
  offset = 100;
  myScrollContainer;
  activityColor = 'warn';

  constructor(private worksService: WorksService,
              private elmRef: ElementRef,
              private renderer: Renderer2,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.myScrollContainer = this.renderer
      .parentNode(this.elmRef.nativeElement.parentNode);

    this.works$ = this.worksService.findAllActiveWorks();
  }

  getMainImage(name) {
    return `assets/projects/${name}/${name}-1.png`;
  }

  getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

  getAvatar(name) {
    return `assets/projects/${name}/${name}-avatar.png`;
  }

  getRemoteTranslation(item: ITranslation) {
    return item[ this.translate.currentLang ];
  }

}
