import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Admin App",
  description: "Next Admin App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
