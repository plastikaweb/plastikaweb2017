import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-indicator',
  templateUrl: './activity-indicator.component.html',
  styleUrls: ['./activity-indicator.component.scss']
})
export class ActivityIndicatorComponent {
  @Input() color = 'primary';
}
