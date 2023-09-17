import express, {Express, Request, Response} from 'express';
import swagger from "./config/swagger";

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to Project X Backend!'),
);

app.use(swagger);
app.use(express.json());

app.listen(port, function () {
  console.log('Backend listening on port 3000!');
});
