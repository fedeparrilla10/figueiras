export interface NavBarItems {
  route: string;
  title: string;
}

export type Langs = 'Español' | 'English' | 'Deustch';

export interface LangsI {
  lang: Langs;
  route: string;
}
