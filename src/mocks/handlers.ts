import { rest } from "msw";
import { mockGames } from "./mocks";

const routes = {
  endpointUsers: "/users",
  login: "/login",
  endpointApp: "/openboards",
  games: "/",
  singleGame: `/${mockGames.singleGame.id}`,
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointUsers}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "someToken" }))
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
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.endpointUsers}${routes.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.games}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.endpointApp}${routes.singleGame}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
];
