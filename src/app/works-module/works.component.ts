import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

import { fadeAnimation } from '../animations/fade.animation';
import { ITranslation, IWork } from '../models/work.model';
import { ImagesService } from '../shared/images-service/images.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  works$: Observable<IWork[]>;
  allTags$: Observable<string[]>;
  offset = 0;
  myScrollContainer;
  imagesService = ImagesService;
  tagsFilter: string[] = [];
  sendTagSelection;

  constructor(
    private route: ActivatedRoute,
    private elmRef: ElementRef,
    private renderer: Renderer2,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.myScrollContainer = this.renderer.parentNode(
      this.elmRef.nativeElement.parentNode.parentNode
    );
    this.works$ = this.route.data.map(data => data.works[0]);
    this.allTags$ = this.route.data.map(data => data.works[1]);
    // TODO find fix
    this.translate.reloadLang(this.translate.currentLang);
  }

  doFilter(tags: string[]) {
    this.tagsFilter = [...tags];
    this.sendTagSelection = '';
  }

  getRemoteTranslation(item: ITranslation) {
    return item[this.translate.currentLang];
  }

  tagSelection(e: string) {
    this.sendTagSelection = e;
  }
}
