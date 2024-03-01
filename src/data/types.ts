export interface NavBarItems {
  route: string;
  title: string;
}

export type Langs = 'Español' | 'English' | 'Deustch';

export interface LangsI {
  lang: Langs;
  route: string;
}

export interface Brands {
  name: string;
  src: string;
}

export interface House {
  id: number;
  title: string;
  backgroundPc: string;
  backgroundMobile: string;
  description: string;
  registerNumber: string;
  bookingImg: string;
}
