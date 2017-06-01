import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { skills } from '../../data/skills';
import { fadeAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: [ './who.component.scss' ],
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  view: any[] = [ 200, 100 ];
  data: any[] = skills;
  years = '';
  proficiency = '';
  colorScheme = {
    domain: [ '#BF360C' ]
  };

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.getTranslation(this.translate.currentLang)
      .subscribe(translation => this.translateChartsUnits(translation));

    this.translate.onLangChange
      .map((e: LangChangeEvent) => e.lang)
      .switchMap((lang: string) => this.translate.getTranslation(lang))
      .subscribe(translation => this.translateChartsUnits(translation));

    this.data.forEach((skill) => {
      this.iconRegistry.addSvgIcon(
        skill.skill,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${skill.icon}`));
    });
  }

  formatProficiency(proficiency) {
    return `${proficiency}%`;
  }

  translateChartsUnits(translation) {
    this.proficiency = translation.WHO.proficiency;
    this.years = translation.WHO.years;
  }
}
