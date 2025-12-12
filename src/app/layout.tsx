import type { Metadata } from "next";
import { Jost, Space_Grotesk, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400"],
});

const nothingYouCouldDo = Nothing_You_Could_Do({
  variable: "--font-nothing-you-could-do",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nvyra X - AI Infrastructure",
  description: "The AI infrastructure that brings clarity to complexity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${spaceGrotesk.variable} ${nothingYouCouldDo.variable} antialiased`}
        style={{ fontFamily: "var(--font-jost), sans-serif" }}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}