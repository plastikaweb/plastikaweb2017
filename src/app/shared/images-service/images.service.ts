import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  static getMainTechImage(name) {
    return `assets/icons/${name}.svg`;
  }

  static getImage(subdirectory, name, sufix): string {
    return `assets/${subdirectory}/${name}/${name}${sufix}`;
  }

  static getImageSet(subdirectory, name): string {
    return `
    assets/${subdirectory}/${name}/${name}1200x600.jpg 1200w,
    assets/${subdirectory}/${name}/${name}-1.jpg 600w,
    assets/${subdirectory}/${name}/${name}400x600.jpg 400w
    `;
  }

  static getDefaultImage(): string {
    return 'assets/images/background.jpg';
  }

}
