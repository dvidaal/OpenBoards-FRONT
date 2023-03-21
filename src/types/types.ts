interface ModalPayload {
  modal: string;
  isError: boolean;
  isLoading: boolean;
  isSucces: boolean;
}

export default ModalPayload;

export interface GameStructure {
  game: string;
  avatar: string;
  data: string;
  hour: string;
  bio: string;
  plazasLibres: number;
  id: string;
  createdBy: string;
}

export type GamesStructure = GameStructure[];

export interface GamesData {
  games: GamesStructure;
  singleGame: GameStructure;
}

export interface CreateGameStructure {
  game: string;
  avatar: string;
  data: string;
  plazasLibres: number;
  bio: string;
  createdBy: string;
}
