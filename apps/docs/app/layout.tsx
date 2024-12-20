import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { setCookieAction } from "~/utils/setCookie";
import { Layout } from "./libraries/Layout";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://chameleon-kit.com"),
  title: {
    default: "Chameleon Kit",
    template: "%s | Chameleon Kit",
  },
  description: "A component UI library for React & Next.js applications.",
  icons: [
    {
      url: `/favicons/${
        process.env.DEV === "local" ? "chameleon-kit-dev/" : ""
      }favicon.ico`,
      type: "image/x-icon",
      sizes: "48x48",
    },
    {
      url: `/favicons/${
        process.env.DEV === "local" ? "chameleon-kit-dev/" : ""
      }favicon-32x32.png`,
      type: "image/png",
      sizes: "32x32",
    },

    {
      url: `/favicons/${
        process.env.DEV === "local" ? "chameleon-kit-dev/" : ""
      }favicon-16x16.png`,
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      url: `/favicons/apple-touch-icon.png`,
      sizes: "180x180",
    },
  ],
  openGraph: {
    title: "Chameleon Kit",
    description:
      "Chameleon Kit | A component UI library for React & Next.js applications.",
    url: "https://chameleon-kit.com",
    siteName: "Chameleon Kit",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/favicons/chameleon-kit.png",
        width: 2028,
        height: 820,
        alt: "Chameleon Kit |A component UI library for React & Next.js applications.",
      },
    ],
  },
  twitter: {
    site: "@chameleon-kit",
    card: "summary_large_image",
    creator: "@chameleon-kit",
    images: [
      {
        url: "/favicons/chameleon-kit.png",
        width: 2028,
        height: 820,
        alt: "Chameleon Kit | A component UI library for React & Next.js applications.",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookiesList = await cookies();
  const sidebarSize = cookiesList.get("sidebarSize")?.value;

  return (
    <html
      lang="en"
      className="min-h-full flex flex-col bg-[rgb(var(--background-start-rgb))] bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))]"
    >
      <body
        className={`${outfit.className} flex flex-col grow min-h-full
`}
      >
        <Layout sidebarSize={sidebarSize} setCookieAction={setCookieAction}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
