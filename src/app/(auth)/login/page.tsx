/**
 * Login Page (Placeholder)
 * Full implementation in Phase 4.
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>Sign in to continue your learning journey</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm text-muted-foreground">
          Login form will be implemented in Phase 4.
        </p>
      </CardContent>
    </Card>
  );
}
