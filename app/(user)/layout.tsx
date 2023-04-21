import "../globals.css";
import { Poppins } from "next/font/google";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Unleashed",
  description: "A damn good blogging site I made using Next.js and Sanity",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <div className="max-w-7xl mx-auto">
          <Header />
          <Banner />
          {children}
        </div>
        <div className="h-10 bg-[#303030] flex items-center justify-center">
          Made with 💕 by {" "}
          <Link
            href="https://www.adithyan.co.in"
            rel="noreferrer noopener"
            target="_blank"
            className="underline"
          >
            Adithyan Jayakumar
          </Link>
        </div>
      </body>
    </html>
  );
}
