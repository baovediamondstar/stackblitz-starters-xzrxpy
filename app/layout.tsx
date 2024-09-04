// app/layout.tsx
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const revalidate = 3600*2 // invalidate every 2 hour

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
