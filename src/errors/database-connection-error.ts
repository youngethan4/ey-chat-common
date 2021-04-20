import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  protected _statusCode = 500;
  private reason = 'Error connecting to database';

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
