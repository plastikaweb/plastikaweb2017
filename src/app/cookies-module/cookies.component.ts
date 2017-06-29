import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

import { fadeAnimation } from '../animations/fade.animation';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  animations: [ fadeAnimation ],
  styleUrls: ['./cookies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiesComponent  {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

}
