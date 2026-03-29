export type Result<T> = { success: true; data: T } | {
  success: false;
  error: Error;
};

export const ResultSuccess = <T>(data: T): { success: true; data: T } => {
  return {
    success: true,
    data,
  };
};

export const ResultFailed = (
  error: Error,
): { success: false; error: Error } => {
  return {
    success: false,
    error,
  };
};

export interface ResponseData {
  data: object;
  status: number;
}

export interface ResponseDataError {
  error: string[];
  status: number;
}
