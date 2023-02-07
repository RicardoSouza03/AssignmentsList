import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  return res.status(err.statusCode || 500).json({ message: err.message });
}

export default errorMiddleware;