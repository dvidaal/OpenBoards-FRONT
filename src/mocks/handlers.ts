import { rest } from "msw";
import { mockGames } from "./mocks";

const routes = {
  appEndpoint: "/openboards",
  login: "/login",
  games: "/games",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.appEndpoint}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "someToken" }))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.appEndpoint}${routes.games}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(mockGames))
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.appEndpoint}${routes.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${routes.appEndpoint}${routes.games}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),
];
