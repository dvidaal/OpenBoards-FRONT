import { rest } from "msw";

const routes = {
  appEndpoint: "/openboards",
  login: "/login",
};

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${routes.appEndpoint}${routes.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "someToken" }))
  ),
];
