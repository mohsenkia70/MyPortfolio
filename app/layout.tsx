import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; 
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohsen.dev - Frontend Developer",
  description:
    "Personal portfolio of Mohsen, a passionate frontend developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords:
    "frontend developer, react developer, next.js, typescript, tailwind css, portfolio, web development",
  authors: [{ name: "Mohsen" }],
  openGraph: {
    title: "Mohsen.dev - Frontend Developer",
    description: "Building modern, fast, and beautiful web experiences.",
    url: "https://mohsen.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={16}
          containerStyle={{
            bottom: "40px",
            right: "40px",
          }}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1f2937",
              color: "#fff",
              borderRadius: "16px",
              padding: "18px 24px",
              fontSize: "16px",
              fontWeight: "500",
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.6)",
              border: "1px solid #374151",
            },

            success: {
              duration: 4000,
              icon: "🚀",
              style: {
                background: "linear-gradient(135deg, #10b981, #059669)",
                border: "none",
              },
            },

            loading: {
              duration: 10000,
              icon: "⏳",
              style: {
                background: "#374151",
                border: "1px solid #4b5563",
              },
            },

            error: {
              duration: 6000,
              icon: "❌",
              style: {
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                border: "none",
              },
            },
          }}
        />
      </body>
    </html>
  );
}