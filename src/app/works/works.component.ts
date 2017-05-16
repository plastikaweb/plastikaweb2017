import { Component } from '@angular/core';
import { projects } from '../../../db/data/projects';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: [ './works.component.scss' ]
})
export class WorksComponent {
  data: any[] = projects;

  getMainImage(name) {
    return `assets/projects/${name}/${name}-1.png`;
  }
  getMainTechImage(name) {
  return `assets/icons/${name}.svg`;
}

}
