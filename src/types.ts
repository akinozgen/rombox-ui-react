export interface Game {
  serial: string;
  title: string;
  language: string;
  info_url: string | null;
  system?: string;
  region?: string;
  cover_image?: string;
}

export type GameSystem = 'PS1' | 'PS2' | 'PSP';
export type GameRegion = 'USA' | 'Europe' | 'Japan';

export interface FilterOptions {
  system: GameSystem | 'All';
  region: GameRegion | 'All';
  searchQuery: string;
}