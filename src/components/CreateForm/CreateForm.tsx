import { useState } from "react";
import useGame from "../../hooks/useGame/useGame";
import { useAppSelector } from "../../store/hooks";
import Button from "../Button/Button";
import CreateFormStyled from "./CreateFormStyled";

const CreateForm = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { createGame } = useGame();
  const [createData, setCreateData] = useState({
    game: "",
    avatar: "",
    data: "",
    plazasLibres: 0,
    bio: "",
    createdBy: id,
  });

  const handleCreateDataChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateData({
      ...createData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createGame(createData);
  };

  const isDisabled =
    createData.avatar === "" ||
    createData.game === "" ||
    createData.bio === "" ||
    createData.plazasLibres === 0;

  return (
    <CreateFormStyled onSubmit={onSubmitHandler} autoComplete="off">
      <label>
        Juego Propuesto
        <select
          placeholder="Juego propuesto"
          name="game"
          className="form__field"
          onChange={handleCreateDataChange}
        >
          <option value="select">Selecciona el juego</option>
          <option value="Monopoly">Monopoly</option>
          <option value="Código Secreto">Código Secreto</option>
          <option value="Azul">Azul</option>
          <option value="Mansión de la Locura">Mansión de la Locura</option>
          <option value="Villainous">Villainous</option>
          <option value="Saboteur">Saboteur</option>
        </select>
      </label>
      <label>
        Cover juego propuesto
        <input
          placeholder="Introduce cover del juego"
          type="url"
          name="avatar"
          className="form__field"
          onChange={handleCreateDataChange}
        />
      </label>
      <label>
        ¿Cuántas plazas restantes quieres abrir?
        <input
          placeholder="Plazas libres"
          type="number"
          name="plazasLibres"
          className="form__field"
          onChange={handleCreateDataChange}
        />
      </label>
      <label>
        Fecha de partida
        <input
          placeholder="Selecciona fecha"
          type="text"
          name="data"
          className="form__field"
          onChange={handleCreateDataChange}
        />
      </label>
      <label>
        Sobre la partida
        <textarea
          placeholder="Cuenta a los demás sobre la partida"
          name="bio"
          className="form__field"
          onChange={handleCreateDataChange}
        />
      </label>
      <Button
        isDisabled={isDisabled}
        text="Crear partida"
        className="form__button"
      />
    </CreateFormStyled>
  );
};

export default CreateForm;
