import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckSquare, Lightbulb, Pencil, Search } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background p-4 sm:p-6 md:p-8">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Aura Dashboard
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Hello Riley, what would you like to accomplish today?
          </p>
        </header>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for a task..." className="pl-10" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Generate UI Wireframes</CardTitle>
              <Pencil className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Create low-fidelity mockups for your app.</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Run Accessibility Audit</CardTitle>
              <CheckSquare className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Check your app for WCAG compliance.</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Brainstorm Creative Concepts</CardTitle>
              <Lightbulb className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Get new ideas for features and designs.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
