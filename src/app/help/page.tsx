
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HelpPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen w-full flex-col p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-sm text-muted-foreground hover:underline"
            aria-label="Return to the previous screen"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            &lt;- Back to your last screen
          </button>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Aura Help Guide
          </h1>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              What is the Intent Box?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Think of this as your magic wand! Just type or say what you want
              to accomplish in plain English. For example, 'make me a login
              screen for an iPhone'. Aura will figure out the rest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              How does Context-Awareness work?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              This is where Aura gets really smart. When you click on
              something on your main design canvas, you'll notice the Aura
              panel changes to show you options for just that item. It helps
              you focus on one piece at a time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
