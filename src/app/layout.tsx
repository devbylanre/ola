export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};
import '../assets/styles/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: 'variable',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={(inter.className, 'bg-white')}>{children}</body>
    </html>
  );
}
