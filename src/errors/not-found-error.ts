import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  protected _statusCode = 404;
  private reason = 'Not Found';

  constructor() {
    super();

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
