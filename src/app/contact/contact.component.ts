import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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
