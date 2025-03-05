import { ValidationError } from 'express-validator';
import { CustomError } from './custom.error';
export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('Invalid Request Validation Error');
    Object.setPrototypeOf(this, new.target.prototype);
  }
  serializeError() {
    return this.errors.map((err) => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }
      return { message: err.msg };
    });
  }
}