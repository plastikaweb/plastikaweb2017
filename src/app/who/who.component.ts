import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { skills } from '../../data/data';
import { LangChangeEvent, TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: [ './who.component.scss' ]
})
export class WhoComponent implements OnInit {
  view: any[] = [ 200, 100 ];
  data: any[] = skills;
  years = 'years';
  proficiency = 'proficiency';
  colorScheme = {
    domain: [ '#BF360C' ]
  };

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.onLangChange
      .map((e: LangChangeEvent) => e.lang)
      .switchMap((lang: string) => this.translate.getTranslation(lang))
      .subscribe(translation => {
        this.proficiency = translation.WHO.proficiency;
        this.years = translation.WHO.years;
      });

    this.data.forEach((skill) => {
      this.iconRegistry.addSvgIcon(
        skill.skill,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${skill.icon}`));
    });
  }

  getIconSrc(iconName) {
    return `assets/icons/${iconName}`;
  }

  formatProficiency(proficiency) {
    return `${proficiency}%`;
  }

  expandedEvent(item): void {
    console.log(item);
  }

  collapsedEvent(item): void {
    console.log(item);
  }
}
