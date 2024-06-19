import express from "express";
import sequelize from "./models";
import AuthRoutes from "./routes/auth.route";
import { PostRoutes } from "./routes/post.route";
import { ExamRoutes } from "./routes/exam.route";
import { QuestionRoutes } from "./routes/question.route";

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = [
  new AuthRoutes(),
  new PostRoutes(),
  new ExamRoutes(),
  new QuestionRoutes(),
];
routes.forEach((route: any) => app.use("/api", route.router));

sequelize.authenticate().then(async () => {
  await sequelize.sync();
  app.listen(port, () => console.log(`Server running on ${port}`));
});
