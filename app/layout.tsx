import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Shoaib Siraj — Full Stack Developer',
  description: 'Building scalable SaaS platforms and modern web applications with Next.js, Django, and cutting-edge tech.',
  keywords: ['Full Stack Developer', 'Next.js', 'Django', 'SaaS', 'Web Development', 'React'],
  authors: [{ name: 'Shoaib Siraj' }],
  openGraph: {
    title: 'Shoaib Siraj — Full Stack Developer',
=======
  title: 'Alex Morgan — Full Stack Developer',
  description: 'Building scalable SaaS platforms and modern web applications with Next.js, Django, and cutting-edge tech.',
  keywords: ['Full Stack Developer', 'Next.js', 'Django', 'SaaS', 'Web Development', 'React'],
  authors: [{ name: 'Alex Morgan' }],
  openGraph: {
    title: 'Alex Morgan — Full Stack Developer',
>>>>>>> 1d73bbeb735ea1ffd0ea938015413cbf03c8b92a
    description: 'Building scalable SaaS platforms and modern web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
