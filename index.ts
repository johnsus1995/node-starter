import express from "express";
import sequelize from "./models";
import AuthRoutes from "./routes/auth.route";

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = [new AuthRoutes()];
routes.forEach((route: any) => app.use("/api", route.router));

sequelize.authenticate().then(async () => {
  await sequelize.sync();
  app.listen(port, () => console.log(`Server running on ${port}`));
});
