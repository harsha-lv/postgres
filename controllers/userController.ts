import type { RequestHandler } from "express";
import * as db from "../db/queries";

export const getUsernames: RequestHandler = async (req, res) => {
  const search = typeof req.query.search === "string" ? req.query.search : "";
  const usernames = await db.getAllUsernames(search);
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
};

export const createUsernameGet: RequestHandler = (_req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add a username</title>
  </head>
  <body>
    <form action="/new" method="post">
      <label for="username">Username</label>
      <input id="username" name="username" type="text" required>
      <button type="submit">Add username</button>
    </form>
  </body>
</html>`);
};

export const createUsernamePost: RequestHandler = async (req, res) => {
  const username: unknown = req.body?.username;
  if (typeof username !== "string") {
    res.status(400).send("Username is required");
    return;
  }
  await db.insertUsername(username);
  res.redirect("/");
};

export const deleteUsernames: RequestHandler = async (_req, res) => {
  await db.deleteAllUsernames();
  res.redirect("/");
};
