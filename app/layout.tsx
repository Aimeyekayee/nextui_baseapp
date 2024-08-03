import { ReactNode } from "react";
import type { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "HRD System",
  description: "Powered by TPMTECH",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }: Props) {
  return children;
}
