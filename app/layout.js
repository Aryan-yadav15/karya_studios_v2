import { Epilogue, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollRevealInit from '@/components/shared/ScrollRevealInit';
import './globals.css';

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-epilogue',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Karya ,Digital agency in Bhubaneswar for web, apps & marketing',
  description:
    'Karya is an upcoming digital agency based in Bhubaneswar, Odisha, building websites, mobile apps and marketing that help Indian brands actually grow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${inter.variable}`}>
      <body>
        <ScrollRevealInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
