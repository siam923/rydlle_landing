import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rydlle",
  description: "Jute items exporter in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
