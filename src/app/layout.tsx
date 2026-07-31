import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../index.css";
import { SmoothScroll } from "../components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Richard Catering | Premium Catering for Corporate, Weddings & Private Events",
  description:
    "Richard Catering delivers exceptional culinary experiences for corporate events, weddings, private gatherings, and daily office meals. Trusted by leading brands across India.",
  keywords: "catering, corporate catering, wedding catering, private events, live counters, custom menus, premium catering India",
  openGraph: {
    title: "Richard Catering | Premium Catering Services",
    description: "Exceptional culinary experiences for every occasion. Corporate, weddings, private events, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
