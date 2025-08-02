import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

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
          <div className="bg-white" />
          <div className="bg-[#f7f7f7]">
            {children}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
