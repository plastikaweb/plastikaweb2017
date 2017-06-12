import { Component, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { ITranslation, IWork } from '../models/work.model';
import { fadeAnimation } from '../animations/fade.animation';
import { WorksService } from '../shared/shared.module';
import { ImagesService } from '../shared/images-service/images.service';

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
  offset = 100;
  myScrollContainer;
  activityColor = 'warn';
  imagesService;

  constructor(private worksService: WorksService,
              private elmRef: ElementRef,
              private _imagesService: ImagesService,
              private renderer: Renderer2,
              private translate: TranslateService) {
    this.imagesService = _imagesService;
  }

  ngOnInit() {
    this.myScrollContainer = this.renderer
      .parentNode(this.elmRef.nativeElement.parentNode);

    this.works$ = this.worksService.findAllActiveWorks();
  }

  getRemoteTranslation(item: ITranslation) {
    return item[ this.translate.currentLang ];
  }

}
