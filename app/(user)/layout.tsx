import "../globals.css";

import Header from "@/components/Header";
import Banner from "@/components/Banner";

export const metadata = {
  title: "Unleashed",
  description: "Unleash your thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
