import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

import { fadeAnimation } from '../animations/fade.animation';
import { ImagesService } from '../shared/images-service/images.service';
import { ITranslation, IWork } from '../models/work.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  works$: Observable<IWork[]>;
  allTags$: Observable<string[]>;
  offset = 100;
  myScrollContainer;
  imagesService;
  tagsFilter: string[] = [];
  sendTagSelection;

  constructor(private route: ActivatedRoute,
              private elmRef: ElementRef,
              private _imagesService: ImagesService,
              private renderer: Renderer2,
              private translate: TranslateService) {
    this.imagesService = _imagesService;
  }

  ngOnInit() {
    this.myScrollContainer = this.renderer
      .parentNode(this.elmRef.nativeElement.parentNode);

    this.works$ = this.route.data.map(data => data.works[ 0 ]);
    this.allTags$ = this.route.data.map(data => data.works[ 1 ]);
    // TODO find fix
    this.translate.reloadLang(this.translate.currentLang);
  }

  doFilter(tags: string[]) {
    this.tagsFilter = [ ...tags ];
    this.sendTagSelection = '';
  }

  getRemoteTranslation(item: ITranslation) {
    return item[ this.translate.currentLang ];
  }

  tagSelection(e: string) {
    this.sendTagSelection = e;
  }

}
