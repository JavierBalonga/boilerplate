import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";
import ServerError from "../../common/ServerError";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ServerError) {
    if (error.status >= 500) {
      console.error(error);
    }
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  if (error instanceof ValidationError) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }

  console.error(error);
  return res.status(500).json({
    status: 500,
    message: error?.stack || error?.message || `${error}`,
  });
};

export default errorHandler;
