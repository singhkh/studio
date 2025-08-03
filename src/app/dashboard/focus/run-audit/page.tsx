
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RunAuditPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl text-center">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Focus Mode: Run Accessibility Audit
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Aura will perform a comprehensive check on your current design for common accessibility issues like color contrast and alt text.
          </p>
        </header>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <Button size="lg" className="w-full max-w-xs text-lg">
            Start Audit
          </Button>
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:underline">
            &lt;- Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
