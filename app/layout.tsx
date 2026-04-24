import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weekly",
  description: "Smart rostering platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black px-8 py-6">
          <Link href="/" className="text-2xl font-bold text-white">
            Week<span className="text-blue-500">ly</span>
          </Link>

          <div className="ml-auto flex items-center gap-8 text-sm text-gray-300">
            
            <Link href="/" className="hover:text-white transition">
             Home
             </Link>
             
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>

            <Link href="/help" className="hover:text-white transition">
              Help
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              Sign Up
            </Link>
          </div>
        </nav>
        

        {children}

      </body>
    </html>
  );
}