// Imported files 
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.jsx"
import { ConvexClientProvider } from "@/components/ConvexClientProvider.jsx";
import { ClerkProvider } from "@clerk/nextjs";

// Font Style being used for the whole TransactBud Project
const inter = Inter({subsets: ["latin"]});

// Optional but Recommended (it is Metadata, it provides context about other data)
export const metadata = {
  title: "TransactBud",
  description: "The smartest way to split expense with friends",
};

//Actual Layout.js files starts from here
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-main.png"/>
      </head>
      <body className={`${inter.className} `}>
        <ClerkProvider>
        <ConvexClientProvider>
          <Header/>
        <main className="min-h-screen">
          {children}
        </main>
        </ConvexClientProvider>
        </ClerkProvider>
        
      </body>
    </html>
  );
}
