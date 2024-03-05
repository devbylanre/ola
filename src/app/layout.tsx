export const metadata = {
  title: 'Ola | Building brands',
  description:
    'a freelancer developer that helps brands push pixels, boundaries and thrive within their respective industry. I resolve consumer challenges and explore new creative opportunities.',
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
    <html
      lang='en'
      className='scroll-smooth focus:scroll-auto'
    >
      <head>
        <link
          rel='icon'
          href='/assets/images/logo/Asset 1.svg'
        />
      </head>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
