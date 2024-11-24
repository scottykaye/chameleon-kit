import type { Metadata } from "next";
import { cookies } from "next/headers";
import { setCookieAction } from "~/utils/setCookie";
import { Homepage } from "./libraries/Homepage";

export const metadata: Metadata = {
  metadataBase: new URL("https://chameleon-kit.com"),
  title: {
    default: "Chameleon Kit",
    template: "%s | Chameleon Kit",
  },
  description:
    "Scott Kaye is a Frontend Software Engineer located in Boston, Massachusetts with a strong background in UI, React, Accessibility and Next.js",
  icons: [
    {
      url: `/images/icons/${
        process.env.DEV === "local" ? "scottykaye-dev/" : ""
      }favicon.ico`,
      type: "image/x-icon",
      sizes: "48x48",
    },
    {
      url: `/images/icons/${
        process.env.DEV === "local" ? "scottykaye-dev/" : ""
      }favicon-32x32.png`,
      type: "image/png",
      sizes: "32x32",
    },

    {
      url: `/images/icons/${
        process.env.DEV === "local" ? "scottykaye-dev/" : ""
      }favicon-16x16.png`,
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "apple-touch-icon",
      url: `/images/icons/apple-touch-icon.png`,
      sizes: "180x180",
    },
  ],
  openGraph: {
    title: "Chameleon Kit",
    description:
      "Chameleon Kit | A component UI library for React Staff Software Engineer Next.js applications.",
    url: "https://scottykaye.com",
    siteName: "Chameleon Kit",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/scottykaye-bg.jpg",
        width: 5472,
        height: 3648,
        alt: "Chameleon Kit | A component UI library for React Staff Software Engineer Next.js applications.",
      },
    ],
  },
  twitter: {
    site: "@scottykaye",
    card: "summary_large_image",
    creator: "@scottykaye",
    images: [
      {
        url: "/images/icons/scottykaye-twitter.png",
        width: 600,
        height: 314,
        alt: "Chameleon Kit | A component UI library for React Staff Software Engineer Next.js applications.",
      },
    ],
  },
};

export default async function Home() {
  const cookiesList = await cookies();
  const sidebarSize = cookiesList.get("sidebarSize")?.value;

  return (
    <Homepage sidebarSize={sidebarSize} setCookieAction={setCookieAction} />
  );
}
