// app/layout.tsx
import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const metadata = {
  title: 'Takeda Shingen Security',
  description: 'Cung cấp dịch vụ bảo vệ chuyên nghiệp và an toàn',
};

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
      </body>
    </html>
  );
}
