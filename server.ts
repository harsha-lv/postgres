import "dotenv/config";
import express from "express";
import userRoutes from "./routes";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.urlencoded({ extended: false }));
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
