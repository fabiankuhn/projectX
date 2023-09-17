import './config/mongoose';

import express, {Express, Request, Response} from 'express';
import swagger from "./config/swagger";

const app: Express = express();

const port = process.env.APP_PORT;

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to Project X Backend!'),
);

app.use(swagger);
app.use(express.json());

app.listen(port, function () {
  console.log(`Backend listening on port ${port}`);
});
