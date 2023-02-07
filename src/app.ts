import 'express-async-errors';
import * as express from 'express';
import routes from './routes';
import errorMiddleware from './middlewares/ErrorMiddlweare';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.app.use(routes);
    this.app.use(errorMiddleware);
  }

  private config(): void {
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;