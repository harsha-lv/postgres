exports.listUsernames = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("Usernames will be logged in the terminal.");
};

exports.showNewUserForm = (req, res) => {
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

exports.createUser = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.send("Username received; check the terminal.");
};
