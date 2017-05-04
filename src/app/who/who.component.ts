import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: [ './who.component.scss' ]
})
export class WhoComponent implements OnInit {
  data: any[] = [
    { skill: 'angular', years: '2', proficiency: 75, icon: 'angular.svg', color: 'rgba(255, 109, 113, 0.4)' },
    { skill: 'javascript', years: '7', proficiency: 85, icon: 'javascript.svg', color: 'rgba(255, 227, 0, 0.4)' },
    { skill: 'typescript', years: '1', proficiency: 75, icon: 'typescript.svg', color: 'rgba(132, 206, 255, 0.5)' },
    { skill: 'CSS3', years: '5', proficiency: 75, icon: 'css3.svg', color: 'rgba(107, 134, 152, 0.5)' },
    { skill: 'Sass', years: '3', proficiency: 70, icon: 'sass.svg', color: 'rgba(241, 184, 215, 0.5)' },
    { skill: 'HTML5', years: '7', proficiency: 80, icon: 'html5.svg', color: 'rgba(253, 117, 59, 0.4)' }
  ];

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.data.forEach((skill) => {
      this.iconRegistry.addSvgIcon(
        skill.skill,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${skill.icon}`));
    });
  }

  getIconSrc(iconName) {
    return `assets/icons/${iconName}`;
  }

  expandedEvent(item): void {
    console.log(item);
  }

  collapsedEvent(item): void {
    console.log(item);
  }
}
