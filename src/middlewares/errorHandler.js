import { isHttpError } from 'http-errors';

export function errorHandler(error, req, res, next) {
  console.log('Error from errorHandler', error);
  if (isHttpError(error) === true) {
    return res
      .status(error.statusCode)
      .json({ status: error.statusCode, message: error.message });
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: error.message,
  });
}
