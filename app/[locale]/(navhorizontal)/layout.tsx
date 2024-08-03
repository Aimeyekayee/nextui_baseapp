import "@/styles/globals.css";
import Loading from "@/components/loading";

import { NavigationBar } from "@/components/navbar";

export default function WithNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col flex-grow max-w-7xl mx-auto max-w-screen min-h-screen">
      <NavigationBar />
      <Loading>{children}</Loading>
    </main>
  );
}
