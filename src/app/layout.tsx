export const metadata = {
  title: 'Ola | Website designer',
  description: 'Ola is a software developer, website designer from Africa',
};
import { BaseLayout } from '@/layouts/root/Index';
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
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
