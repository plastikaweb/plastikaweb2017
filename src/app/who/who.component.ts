import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: [ './who.component.scss' ]
})
export class WhoComponent implements OnInit {
  view: any[] = [200, 75];
  data: any[] = [
    { skill: 'angular', years: 2, proficiency: 75, icon: 'angular.svg', class: 'red'},
    { skill: 'javascript', years: 10, proficiency: 85, icon: 'javascript.svg', class: 'yellow' },
    { skill: 'typescript', years: 1, proficiency: 75, icon: 'typescript.svg', class: 'blue' },
    { skill: 'CSS3', years: 7, proficiency: 75, icon: 'css3.svg', class: 'grey' },
    { skill: 'Sass', years: 4, proficiency: 70, icon: 'sass.svg', class: 'pink' },
    { skill: 'HTML5', years: 7, proficiency: 80, icon: 'html5.svg', class: 'orange' }
  ];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

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
