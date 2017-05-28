interface IIcon {
  image: string;
  label: string;
  link?: string;
}
export class Iconography {
  static plastikaweb: IIcon = {
    image: '/assets/icons/w.svg',
    label: 'plastikaweb'
  };
  static github: IIcon = {
    image: '/assets/icons/github.svg',
    label: 'github',
    link: 'https://github.com/plastikaweb'
  };
}
