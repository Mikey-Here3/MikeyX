/**
 * Global Loading Page
 * 
 * Shown during route transitions at the app level.
 * Next.js automatically uses this for Suspense boundaries.
 */
import { PageLoader } from "@/components/common/loading-spinner";

export default function Loading() {
  return <PageLoader />;
}
