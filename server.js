const express = require("express");
const userRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
