export abstract class CustomError extends Error {
  protected abstract _statusCode: number;

  constructor() {
    super();
    //Only because we are extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  get statusCode() {
    return this._statusCode;
  }

  public abstract serializeErrors(): { message: string; field?: string }[];
}
