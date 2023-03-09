const Form = (): JSX.Element => {
  return (
    <>
      <img src="openBoardsLogo.webp" alt="Logo Open Boards" />
      <p>Encuentras los juegos, te reservamos la mesa</p>
      <label>
        Username
        <input type="username" placeholder="Username" name="username" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Password" name="password" />
      </label>
    </>
  );
};

export default Form;
