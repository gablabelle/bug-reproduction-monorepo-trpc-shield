import { shield, allow, deny } from "trpc-shield";

export const permissions = shield(
  {
    query: {
      "example.hello": deny,
    },
  },
  { fallbackRule: deny }
);
