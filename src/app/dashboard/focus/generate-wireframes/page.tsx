
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function GenerateWireframesPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Focus Mode: Generate UI Wireframes
          </h1>
        </header>

        <div className="space-y-6">
          <div>
            <Label htmlFor="target-user" className="text-base">
              Describe the target user for this screen.
            </Label>
            <Input id="target-user" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="primary-goal" className="text-base">
              What is the primary goal the user needs to achieve?
            </Label>
            <Textarea id="primary-goal" className="mt-2 min-h-[120px]" />
          </div>

          <div>
            <Label htmlFor="output-style" className="text-base">
              Choose an output style
            </Label>
            <Select>
              <SelectTrigger id="output-style" className="mt-2">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mobile-app">Mobile App</SelectItem>
                <SelectItem value="desktop-web">Desktop Web</SelectItem>
                <SelectItem value="dashboard">Dashboard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <Button size="lg" className="w-full text-lg">
            Generate with AI
          </Button>
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:underline">
            &lt;- Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
