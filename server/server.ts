import express, { Express, Request, Response, NextFunction } from 'express';
import grafanaRouter from './routes/grafanaRouter';
import connectDB from './db/db';

connectDB();

const port: number = Number(process.env.EXPRESS_PORT) || 8880;
const app: Express = express();

// to enable request body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/grafana', grafanaRouter);

//route for url not existed
app.use((req: Request, res: Response) => {
  res.status(404).send('This is not the page you\'re looking for...')
})

// Express global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
