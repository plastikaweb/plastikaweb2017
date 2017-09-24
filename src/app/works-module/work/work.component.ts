import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'ng2-breadcrumb/bundles/components/breadcrumbService';
import { Observable } from 'rxjs/Observable';

import { fadeAnimation } from '../../animations/fade.animation';
import { ITranslation, IWork } from '../../models/work.model';
import { ImagesService } from '../../shared/images-service/images.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  work$: Observable<IWork>;
  slug;
  myScrollContainer;
  offset = 0;
  imagesService = ImagesService;

  constructor(private route: ActivatedRoute,
              private breadcrumbService: BreadcrumbService,
              private elmRef: ElementRef,
              private renderer: Renderer2,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.myScrollContainer = this.renderer.parentNode(
      this.elmRef.nativeElement.parentNode.parentNode
    );
    this.work$ = this.route.data.map(data => data.work[ 0 ]);
    // TODO check if the named route for work is already added
    // or it is the first time (the loading has gone directly to work detail)
    this.route.data.map(data => data.work[ 1 ])
      .subscribe(name => this.breadcrumbService
        .addFriendlyNameForRoute(`/works/${this.slug}`, name)
      );
    // TODO find fix
    this.translate.reloadLang(this.translate.currentLang);
  }

  getRemoteTranslation(item: ITranslation): string {
    return item[ this.translate.currentLang ];
  }

}
