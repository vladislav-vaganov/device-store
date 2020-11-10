const HttpStatusCodes = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
};

class ApiError extends Error {
  constructor(message, httpStatus = HttpStatusCodes.INTERNAL_SERVER) {
    super(message);
    this.httpStatus = httpStatus;
  }
}

module.exports = { ApiError, HttpStatusCodes };
