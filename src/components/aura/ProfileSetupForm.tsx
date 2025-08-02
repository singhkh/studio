"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

export function ProfileSetupForm() {
  const [pacing, setPacing] = useState("step-by-step");
  const [visuals, setVisuals] = useState("minimalist");
  const [notifications, setNotifications] = useState("digest");
  const { toast } = useToast();
  const router = useRouter();

  const handleSave = () => {
    // Here you would typically save the settings to a backend or state management
    console.log("Profile settings saved:", { pacing, visuals, notifications });
    toast({
      title: "Profile Saved",
      description: "Your cognitive profile settings have been successfully updated.",
      duration: 5000,
    });
    router.push('/dashboard');
  };

  return (
    <TooltipProvider>
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Welcome, Riley.
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Let's set up your Cognitive Profile.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Pacing
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Wondering which to pick? 'Step-by-step' is great if you prefer to focus on one thing at a time. We'll wait for you to click 'Next'.</p>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={pacing} onValueChange={setPacing} className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="real-time" id="pacing-real-time" />
                  <Label htmlFor="pacing-real-time" className="cursor-pointer">
                    Real-time (dynamic suggestions)
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="step-by-step" id="pacing-step-by-step" />
                  <Label htmlFor="pacing-step-by-step" className="cursor-pointer">
                    Step-by-step (I click 'Next')
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Visuals
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This helps calm things down. 'Minimalist' removes animations and uses simple, high-contrast colors to help with focus.</p>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={visuals} onValueChange={setVisuals} className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="standard" id="visuals-standard" />
                  <Label htmlFor="visuals-standard" className="cursor-pointer">Standard</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="minimalist" id="visuals-minimalist" />
                  <Label htmlFor="visuals-minimalist" className="cursor-pointer">
                    Minimalist (high-contrast, no animations)
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Notifications
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is your focus shield! 'Daily Digest' stops random pop-ups and gives you one simple summary at the end of the day.</p>
                  </TooltipContent>
                </Tooltip>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={notifications} onValueChange={setNotifications} className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="pop-ups" id="notifications-pop-ups" />
                  <Label htmlFor="notifications-pop-ups" className="cursor-pointer">
                    Instant Pop-ups
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="digest" id="notifications-digest" />
                  <Label htmlFor="notifications-digest" className="cursor-pointer">
                    Daily Digest (one summary per day)
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        <Button size="lg" className="w-full text-lg" onClick={handleSave}>
          Save Profile & Continue
        </Button>
      </div>
    </TooltipProvider>
  );
}