import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Max Opanasenko's professional portfolio website",
  verification: {
    google: 'l3wnrOA_aj_0dgBn-bHfFftUorl-Mqjke5w3CLfTDn8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
