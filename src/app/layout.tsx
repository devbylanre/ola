export const metadata = {
  title: 'Ola - Design build and ship websites',
  description:
    'Ola is a freelancer developer that helps brands push pixels, boundaries and thrive within their respective industry. I resolve digital challenges and explore new creative opportunities.',
};
import { BaseLayout } from '@/layouts/root/Index';
import '../assets/styles/global.css';
import { Inter } from 'next/font/google';

const Typo = Inter({
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
      <body className={Typo.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
