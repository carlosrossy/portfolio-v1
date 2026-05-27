import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Sidebar } from '@/components/sidebar/sidebar-content';
import { Footer } from '@/components/footer';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://carlosrossy.dev'),
  title: {
    default: 'Carlos Eduardo — Full Stack Developer',
    template: '%s | Carlos Eduardo',
  },
  description:
    'Full Stack Developer building modern, performant web applications focused on user experience.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
    'Carlos Eduardo',
  ],
  authors: [{ name: 'Carlos Eduardo' }],
  creator: 'Carlos Eduardo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Carlos Eduardo — Full Stack Developer',
    description:
      'Full Stack Developer building modern, performant web applications focused on user experience.',
    siteName: 'Carlos Eduardo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Eduardo — Full Stack Developer',
    description:
      'Full Stack Developer building modern, performant web applications focused on user experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="scrollbar-thin min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to content
        </a>

        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex min-h-screen flex-1 flex-col md:ml-[280px]">
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
