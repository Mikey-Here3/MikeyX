/**
 * Standardized API Response Helpers
 * 
 * Every API route returns the same shape:
 * { success: boolean, data?: T, error?: string, message?: string }
 * 
 * This consistency makes the frontend predictable —
 * the client always knows how to parse responses.
 */
import { NextResponse } from "next/server";

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export function successResponse<T>(data: T, status = 200) {
  return NextResponse.json<ApiResponse<T>>(
    { success: true, data },
    { status }
  );
}

export function errorResponse(error: string, status = 400) {
  return NextResponse.json<ApiResponse>(
    { success: false, error },
    { status }
  );
}

export function messageResponse(message: string, status = 200) {
  return NextResponse.json<ApiResponse>(
    { success: true, message },
    { status }
  );
}
