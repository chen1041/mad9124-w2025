class ServiceError extends Error {
  status = 500;

  constructor(message) {
    super(message);
  }
}

class BadRequestError extends ServiceError {
  status = 400;
}

class UnauthorizedError extends ServiceError {
  status = 401;
}

class ForbiddenError extends ServiceError {
  status = 403;
}

class NotFoundError extends ServiceError {
  status = 404;
}

const errorHandler = (error, _req, res, _next) => {
  console.error('Error!', error.message);

  if (error instanceof ServiceError) {
    res.status(error.status).json({
      error: error.message,
    });
    // console.log(0);
    // console.log(error.message);
    return;
  }

  res.status(500).json({
    error: 'Something went wrong',
  });
};

module.exports = {
  ServiceError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  errorHandler,
};
