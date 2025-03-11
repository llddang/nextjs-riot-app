export type ErrorResponse = {
  status: {
    message: string;
    status_code: number;
  };
};

export class HttpError extends Error {
  statusCode: number;

  constructor(message: string = "", statusCode: number = 500) {
    super(message || "HttpError");
    this.name = "HttpError";
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends HttpError {
  constructor(message?: string) {
    super(message ?? "BadRequestError", 400);
    this.name = "BadRequestError";
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message?: string) {
    super(message ?? "UnauthorizedError", 401);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends HttpError {
  constructor(message?: string) {
    super(message ?? "ForbiddenError", 403);
    this.name = "ForbiddenError";
  }
}

export class NotFoundError extends HttpError {
  constructor(message?: string) {
    super(message ?? "NotFoundError", 404);
    this.name = "NotFoundError";
  }
}

export function categorizeError(message: string, status_code: number): Error {
  switch (status_code) {
    case 400:
      return new BadRequestError(message);
    case 401:
      return new UnauthorizedError(message);
    case 403:
      return new ForbiddenError(message);
    case 404:
      return new NotFoundError(message);
    default:
      return new HttpError(message, status_code);
  }
}
