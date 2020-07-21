/*eslint-disable*/
import AppError from "../utils/appError";

// const handleTokenExpErr = () =>
//   new AppError(401, "Your token is expired please login again!");


const sendProdErr = (err, res) => {
  // Operational, known error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't show error details to the client
  } else {
    // 1) Log error
    console.error("ERROR 💥", err);
    // 2) Send simple message for unknown error
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

const sendDevErr = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV.startsWith("production")) {
    let error = { ...err };


    sendProdErr(error, res);
  } else if (process.env.NODE_ENV === "development") {
    sendDevErr(err, res);
  }
};
