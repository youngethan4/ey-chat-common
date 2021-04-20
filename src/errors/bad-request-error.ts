import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  protected _statusCode = 400;

  constructor(private reason: string) {
    super();

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
