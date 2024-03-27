import 'module-alias/register';
import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.use(express.json());

app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) => {
    return response.status(400).json({ error: error.message });
  },
);

app.listen(3333, () => {
  console.log('Server is running on port 3333!');
});
