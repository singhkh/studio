
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ModifyButtonPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl">
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
          <Button size="lg" className="w-full text-lg">
            Apply Changes
          </Button>
        </div>
      </div>
    </main>
  );
}
