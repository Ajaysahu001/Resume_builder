import { Geist, Geist_Mono } from "next/font/google";
import StoreProvider from "@/redux/StoreProvider";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "../styles/globals.scss";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume Builder - Create Professional Resumes",
  description: "Build professional resumes with our easy-to-use resume builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} suppressHydrationWarning>
        <StoreProvider>
          <Toaster position="bottom-right" />
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
