export class CustomError extends Error {
  status: number;
  response: unknown;

  constructor(status: number, message: string, response?: unknown) {
    super(message);
    this.status = status;
    this.response = response;
    this.name = "CustomError";
  }
}
