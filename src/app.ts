import * as express from 'express';
import routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.app.use(routes);
  }

  private config(): void {
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;