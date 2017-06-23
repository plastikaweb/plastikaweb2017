import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-cookies-snackbar',
  templateUrl: './cookies-snackbar.component.html',
  styleUrls: ['./cookies-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookiesSnackbarComponent {

  public snackBarCookieRef: any;

  constructor(private cookieService: CookieService) {}

  closeCookies() {
    // set cookie for 2 years
    this.cookieService.set('pw-cookies', 'true', 730);
    this.snackBarCookieRef.dismiss();
  }
}
