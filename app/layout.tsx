import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlacementAI Portal",
  description: "AI-powered training and placement portal for domain selection, preparation, and career intelligence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
