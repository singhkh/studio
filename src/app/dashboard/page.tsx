
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckSquare, Mic, Pencil } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const handleStartWireframe = () => {
    router.push('/dashboard/focus/generate-wireframes');
  };

  const handleStartAudit = () => {
    router.push('/dashboard/focus/run-audit');
  };

  return (
    <main className="flex min-h-screen w-full flex-col p-4 sm:p-6 md:p-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="space-y-8">
          {/* Intent Box */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="user-goal" className="text-base font-semibold">
                Hello Riley, what is your goal today?
              </Label>
              <Button variant="ghost" size="icon" aria-label="Activate voice input">
                <Mic className="h-5 w-5" />
              </Button>
            </div>
            <Textarea
              id="user-goal"
              placeholder="e.g., 'Create a settings screen for a user profile...'"
              className="min-h-[100px] text-base"
            />
            <Button size="lg" className="w-full text-lg" onClick={handleStartWireframe}>
              Start
            </Button>
          </div>

          {/* Common Workflows */}
          <div>
            <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">
              Or, start with a common workflow:
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <button
                onClick={handleStartWireframe}
                aria-label="Start a new UI wireframe generation workflow"
                className="w-full text-left"
              >
                <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Generate UI Wireframes</CardTitle>
                    <Pencil className="h-6 w-6 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Create low-fidelity mockups for your app.</p>
                  </CardContent>
                </Card>
              </button>
              <button
                onClick={handleStartAudit}
                aria-label="Start a new accessibility audit workflow"
                className="w-full text-left"
              >
                <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Run Accessibility Audit</CardTitle>
                    <CheckSquare className="h-6 w-6 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Check your app for WCAG compliance.</p>
                  </CardContent>
                </Card>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
