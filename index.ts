import http from 'http';
import express from 'express';
import sequelize from './models';
import AuthRoutes from './routes/auth.route';
import { PostRoutes } from './routes/post.route';
import logger from './utils/logger';

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = [new AuthRoutes(), new PostRoutes()];
routes.forEach((route: any) => app.use('/api', route.router));

sequelize.authenticate().then(async () => {
  await sequelize.sync();
  const server = http.createServer(app);
  server.listen(port, () => logger.info(`Server running on ${port}`));
});
