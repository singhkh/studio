
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ModifyButtonPage() {
  return (
    <main className="flex min-h-screen w-full flex-col p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="flex items-center text-sm text-muted-foreground hover:underline"
            aria-label="Return to the main workflows dashboard"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Workflows
          </Link>
        </div>
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Modify: Button Component
          </h1>
        </header>

        <div className="space-y-6">
          <div>
            <Label htmlFor="button-text" className="text-base">
              Button Text
            </Label>
            <Input id="button-text" className="mt-2" defaultValue="Get Started" />
          </div>

          <div>
            <Label htmlFor="style-change" className="text-base">
              Describe desired style change
            </Label>
            <Textarea
              id="style-change"
              className="mt-2 min-h-[120px]"
              placeholder="e.g., 'make the button blue with white text'"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <Button
            size="lg"
            className="w-full text-lg"
            aria-label="Apply style and text changes to the selected button component"
          >
            Apply Changes
          </Button>
        </div>
      </div>
    </main>
  );
}
