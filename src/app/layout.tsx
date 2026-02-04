import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'Personal Portfolio Website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}
