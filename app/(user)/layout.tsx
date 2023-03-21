import "../globals.css";
import { Poppins } from "next/font/google";

import Header from "@/components/Header";
import Banner from "@/components/Banner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Unleashed",
  description: "A damn good blogging site I made using Next.js and Sanity",
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
        <div className="h-10 bg-[#303030] flex items-center justify-center">Made with 💕 by Adithyan Jayakumar</div>
      </body>
    </html>
  );
}
