
'use client';

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Image from 'next/image';
import Link from 'next/link';

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
              src="https://i.imgur.com/27Gcv2y.png"
              alt="A Figma design of a User Persona Template."
              fill
              objectFit="contain"
              data-ai-hint="design app figma"
            />
            <Link
              href="/dashboard"
              className="absolute"
              style={{
                top: '25%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '300px',
                height: '60px',
                cursor: 'pointer',
              }}
            ><div /></Link>
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
          <div className="bg-[#f7f7f7]">
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
