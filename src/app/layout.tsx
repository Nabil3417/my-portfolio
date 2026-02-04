import React from "react";

// This tells TypeScript exactly what "children" is
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030712] text-white">
        {children}
      </body>
    </html>
  );
}