import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'plastika-web',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/w.svg'));

    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg'));

  }
}
