interface ModalPayload {
  modal: string;
  isError: boolean;
}

export default ModalPayload;

export interface GameStructure {
  game: string;
  avatar: string;
  date: string;
  hour: string;
  bio: string;
  plazasLibres: number;
}

export type GamesStructure = GameStructure[];

export interface GamesData {
  games: GamesStructure;
}
