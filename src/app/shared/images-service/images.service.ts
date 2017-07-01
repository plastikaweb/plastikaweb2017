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
    assets/${subdirectory}/${name}/${name}1200x600.png 1200w,
    assets/${subdirectory}/${name}/${name}-1.png 600w,
    assets/${subdirectory}/${name}/${name}400x600.png 400w
    `;
  }

  static getDefaultImage(): string {
    return 'assets/images/background.jpg';
  }

}
