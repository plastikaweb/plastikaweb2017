import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  getImage(subdirectory, name, sufix): string {
    return `assets/${subdirectory}/${name}/${name}${sufix}`;
  }

  getImageSet(subdirectory, name): string {
    return `
    assets/${subdirectory}/${name}/${name}1200x600.png 1200w,
    assets/${subdirectory}/${name}/${name}-1.png 600w,
    assets/${subdirectory}/${name}/${name}400x600.png 400w
    `;
  }

  getDefaultImage(): string {
    return 'assets/images/background.jpg';
  }
}
