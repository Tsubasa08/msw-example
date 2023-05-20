import { User } from "../types";
import { rest } from "msw";

const user: User = {
  id: 1,
  name: "Tsubasa",
  email: "tsubasa@example.com",
};

export const handlers = [
  rest.get("https://example.com/api/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(user));
  }),
];
