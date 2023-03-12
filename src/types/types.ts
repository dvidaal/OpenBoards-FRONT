interface ModalPayload {
  modal: string;
  isError: boolean;
}

export default ModalPayload;

export interface GameStructure {
  game: string;
  avatar: string;
  date: Date;
  hour: string;
  bio: string;
  plazasLibres: number;
}

export type GamesStructure = GameStructure[];
