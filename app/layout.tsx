import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Kennar · I'm Sorry, Love",
  description: "A heartfelt apology from Shean to Kennar.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
