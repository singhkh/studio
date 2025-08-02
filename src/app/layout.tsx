
'use client';

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Image from 'next/image';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

{/*
export const metadata: Metadata = {
  title: 'Aura',
  description: 'Your cognitive AI partner.',
};
*/}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <html lang="en">
      <head>
        <title>Aura</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <main className="grid grid-cols-[65fr_35fr] min-h-screen">
          <div className="bg-white relative">
            <Image
              src="https://placehold.co/1200x900.png"
              alt="User Persona Template from Figma"
              fill
              objectFit="contain"
              data-ai-hint="user persona template"
            />
            <Link
              href="/dashboard"
              className="group absolute"
              style={{
                top: '25%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '60px',
                cursor: 'pointer',
              }}
            >
              <div className="w-full h-full rounded-lg transition-colors group-hover:bg-blue-500/20" />
            </Link>
            <Link
              href="/dashboard/modify-button"
              className="absolute"
              style={{
                top: '48%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '50px',
                cursor: 'pointer',
              }}
            ><div /></Link>
          </div>
          <div className="bg-[#f7f7f7] flex flex-col">
            <div className="flex-grow">
              {children}
            </div>
            <footer className="p-4 border-t border-border">
              <button onClick={() => router.push('/help')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:underline">
                <HelpCircle className="h-5 w-5" />
                Help Guide
              </button>
            </footer>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
