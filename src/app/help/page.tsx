
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
          <p className="mt-2 text-muted-foreground">
            A step-by-step guide to using your AI partner.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              Step 1: Set Up Your Cognitive Profile
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground space-y-2">
              <p>
                Your journey begins by tailoring Aura to your unique workflow. The Cognitive Profile helps Aura understand how you like to work.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Pacing:</strong> Choose how you want Aura to interact. 'Real-time' provides dynamic suggestions as you work, while 'Step-by-step' waits for your cue.</li>
                <li><strong>Visuals:</strong> Adjust the interface's complexity. 'Minimalist' mode offers a high-contrast, low-animation experience to help you focus.</li>
                <li><strong>Notifications:</strong> Control how you receive updates. 'Daily Digest' bundles all notifications into a single summary to minimize interruptions.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              Step 2: Use the Intent Box
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
             <p>
                The Intent Box on your dashboard is your primary command center. Think of it as your magic wand! Just type or say what you want
                to accomplish in plain English. For example, 'make me a login
                screen for an iPhone'. Aura will figure out the rest and guide you to the right workflow.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">
              Step 3: Start a Workflow
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground space-y-2">
              <p>You can either use the Intent Box or choose a "Common Workflow" card from the dashboard. Here are a couple of examples:</p>
               <ul className="list-disc pl-5 space-y-1">
                <li><strong>Generate UI Wireframes:</strong> Describe your target user and their goal, and Aura will generate a low-fidelity mockup for your mobile app or website.</li>
                <li><strong>Modify a Component:</strong> Click on an element on your canvas, and the sidecar will show you options to change it. You can describe style changes in plain language, like 'make the button blue'.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold">
              Bonus: How Context-Awareness Works
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              This is where Aura gets really smart. When you click on
              something on your main design canvas (like a button or a form), you'll notice the Aura
              panel changes to show you options for just that item. It helps
              you focus on one piece at a time without getting overwhelmed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
