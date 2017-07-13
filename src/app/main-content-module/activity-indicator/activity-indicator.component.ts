import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavigationStart, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-activity-indicator',
  templateUrl: './activity-indicator.component.html'
})
export class ActivityIndicatorComponent implements OnInit {

  loading$: Observable<boolean>;
  @Input() color = 'primary';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loading$ = this.router.events
      .map(event =>
        (event instanceof NavigationStart || event instanceof RoutesRecognized)
      );
  }
}
