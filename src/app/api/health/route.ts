/**
 * Health Check API Route
 * 
 * GET /api/health
 * 
 * Returns server status, timestamp, and environment.
 * Used for:
 * - Vercel deployment checks
 * - Monitoring uptime
 * - Quick verification that the API is running
 */
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    app: "MikeyX",
    version: "1.0.0",
  });
}
