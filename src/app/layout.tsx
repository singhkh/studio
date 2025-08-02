import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aura',
  description: 'Your cognitive AI partner.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <main className="grid grid-cols-[65fr_35fr] min-h-screen">
          <div className="bg-white relative">
            <Image
              src="https://placehold.co/1200x900.png"
              alt="Design application canvas with a 'Welcome Screen' title and a 'Get Started' button."
              layout="fill"
              objectFit="cover"
              data-ai-hint="design app canvas"
            />
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
