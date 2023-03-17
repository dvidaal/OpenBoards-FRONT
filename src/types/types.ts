interface ModalPayload {
  modal: string;
  isError: boolean;
  isLoading: boolean;
}

export default ModalPayload;

export interface GameStructure {
  game: string;
  avatar: string;
  date: string;
  hour: string;
  bio: string;
  plazasLibres: number;
  id: string;
}

export type GamesStructure = GameStructure[];

export interface GamesData {
  games: GamesStructure;
  singleGame: GameStructure;
}
