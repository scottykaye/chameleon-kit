import type { ReactNode } from "react";
import { Header } from "~/components/Header";

export default function IntroductionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header startAtCenter />
      <main className="p-5">{children}</main>
    </>
  );
}
