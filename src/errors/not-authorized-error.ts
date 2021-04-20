import { CustomError } from './custom-error';

export class NotAuthorizedError extends CustomError {
  protected _statusCode = 401;
  private reason = 'Not authorized';

  constructor() {
    super();

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
