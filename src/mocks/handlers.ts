import { rest } from "msw";
import { mockGames } from "./mocks";

const routes = {
  endpointUsers: "/users",
  login: "/login",
  register: "/register",
  endpointApp: "/openboards",
  games: "/",
  singleGame: `/${mockGames.singleGame.id}`,
  deleteGame: "/delete",
  findId: "/:id",
  createGame: "/create",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointUsers}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "someToken" }))
  ),

  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointUsers}${routes.register}`,
    async (req, res, ctx) => res(ctx.status(201))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.games}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockGames))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.singleGame}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ singleGame: mockGames.singleGame }))
  ),

  rest.delete(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.deleteGame}${routes.findId}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json({ mockGames }))
  ),

  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.createGame}`,
    async (req, res, ctx) => res(ctx.status(201), ctx.json({ mockGames }))
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointUsers}${routes.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointUsers}${routes.register}`,
    async (req, res, ctx) => res(ctx.status(404))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.games}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.singleGame}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.delete(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.deleteGame}${routes.findId}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.createGame}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
];
