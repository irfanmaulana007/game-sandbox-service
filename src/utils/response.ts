import type { Response } from 'express';

// Response types
export interface SuccessResponse<T = unknown> {
  success: true;
  data: T;
  message?: string;
  pagination?: PaginationInfo;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errorStatus: number;
  data?: unknown;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

// Pagination calculation utility
export function calculatePagination(
  total: number,
  page: number = 1,
  limit: number = 10
): PaginationInfo {
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.max(1, Math.min(page, totalPages));

  return {
    page: currentPage,
    limit,
    total,
    totalPages,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  };
}

// Success response functions
export function sendSuccess<T>(
  res: Response,
  data: T,
  message?: string,
  statusCode: number = 200
): void {
  const response: SuccessResponse<T> = {
    success: true,
    data,
    ...(message && { message }),
  };

  res.status(statusCode).json(response);
}

export function sendSuccessWithPagination<T>(
  res: Response,
  data: T[],
  total: number,
  page: number = 1,
  limit: number = 10,
  message?: string,
  statusCode: number = 200
): void {
  const pagination = calculatePagination(total, page, limit);

  const response: SuccessResponse<T[]> = {
    success: true,
    data,
    ...(message && { message }),
    pagination,
  };

  res.status(statusCode).json(response);
}

export function sendCreated<T>(res: Response, data: T, message?: string): void {
  sendSuccess(res, data, message, 201);
}

export function sendNoContent(res: Response): void {
  res.status(204).send();
}

// Error response functions
export function sendError(
  res: Response,
  message: string,
  errorStatus: number = 500,
  data?: unknown
): void {
  const response: ErrorResponse = {
    success: false,
    message,
    errorStatus,
  };

  if (data !== undefined) {
    response.data = data;
  }

  res.status(errorStatus).json(response);
}

export function sendBadRequest(
  res: Response,
  message: string = 'Bad request',
  data?: unknown
): void {
  sendError(res, message, 400, data);
}

export function sendUnauthorized(
  res: Response,
  message: string = 'Unauthorized',
  data?: unknown
): void {
  sendError(res, message, 401, data);
}

export function sendForbidden(res: Response, message: string = 'Forbidden', data?: unknown): void {
  sendError(res, message, 403, data);
}

export function sendNotFound(
  res: Response,
  message: string = 'Resource not found',
  data?: unknown
): void {
  sendError(res, message, 404, data);
}

export function sendConflict(res: Response, message: string = 'Conflict', data?: unknown): void {
  sendError(res, message, 409, data);
}

export function sendValidationError(
  res: Response,
  message: string = 'Validation error',
  data?: unknown
): void {
  sendError(res, message, 422, data);
}

export function sendInternalError(
  res: Response,
  message: string = 'Internal server error',
  data?: unknown
): void {
  sendError(res, message, 500, data);
}

// Pagination helper for database queries
export function getPaginationParams(query: Record<string, unknown>): {
  page: number;
  limit: number;
} {
  const page = Math.max(1, parseInt(String(query.page)) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(String(query.limit)) || 10));

  return { page, limit };
}

export function getPrismaPagination(page: number, limit: number) {
  return {
    skip: (page - 1) * limit,
    take: limit,
  };
}
