export class BaseError<T = unknown> extends Error {
  payload?: T;

  constructor(message: string, payload?: T) {
    super(message);
    this.payload = payload;
  }
}
