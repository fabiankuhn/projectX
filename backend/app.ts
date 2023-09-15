import express, { Express, Request, Response } from 'express';
import * as swaggerUiExpress from 'swagger-ui-express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) =>
  res.send('backend'),
);

app.get('/swagger/definition', (req: Request, res: Response) => {
  res.sendFile(`${process.cwd()}/definitions/portfolio.yaml`);
});

app.use(
  '/swagger',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(undefined, {
    swaggerOptions: {
      displayRequestDuration: true,
      url: '/swagger/definition',
    },
  }),
);

app.use(express.json());

app.listen(port, function () {
  console.log('Backend listening on port 3000!');
});
