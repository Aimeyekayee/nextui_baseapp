import Loading from "@/components/loading";
import { NavigationBar } from "@/components/navbar";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <NavigationBar />
      <Loading>{children}</Loading>
    </div>
  );
}
