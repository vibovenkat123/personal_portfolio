import Head from "next/head";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Vaibhav Venkat",
  description: "By Vaibhav Venkat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className={roboto_mono.className}>{children}</body>
    </html>
  );
}
