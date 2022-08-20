export interface ServerErrorOptions {
  status?: number;
  message: string;
}

export default class ServerError extends Error {
  status: number;

  constructor({ status = 500, message }: ServerErrorOptions) {
    super(message);
    this.status = status;
  }
}
