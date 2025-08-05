import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
export const metadata: Metadata = {
  title: "Raza.H | Profile",
  description: "Frontend Mern Stack Developer",
};
const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased bg-bodyColor`}>
        <main>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
