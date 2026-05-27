import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Sidebar } from '@/components/sidebar/sidebar-content';

export const metadata: Metadata = {
  title: 'Prompt Manager',
  description: 'Gerencie seus prompts',
};

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 md:ml-[280px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
