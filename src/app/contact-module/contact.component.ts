import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { fadeAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [ fadeAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/linkedin.svg`));
    this.iconRegistry.addSvgIcon(
      'facebook',
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/facebook.svg`));
    this.iconRegistry.addSvgIcon(
      'twitter',
      this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/twitter.svg`));
  }
}
