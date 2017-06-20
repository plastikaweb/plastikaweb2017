import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiesComponent  {

}
