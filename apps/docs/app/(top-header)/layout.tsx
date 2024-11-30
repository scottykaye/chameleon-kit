import type { ReactNode } from "react";
import { Header } from "~/components/Header";

export default function TopHeaderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="p-5">{children}</main>
    </>
  );
}
