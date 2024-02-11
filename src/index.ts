import { Elysia } from "elysia";

const elysia = new Elysia();

const app = elysia.get("/", () => "Hello Elysia").listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
