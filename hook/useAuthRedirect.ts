import { useEffect } from "react";
import { useRouter, usePathname } from "@/navigation";
import { UserStore } from "@/store/user.store";

export const useAuthRedirect = (redirectTo: string = "/login") => {
  const router = useRouter();
  const pathname = usePathname();
  const { loadUser, user } = UserStore.getState();

  useEffect(() => {
    loadUser();
    if (!user) {
      router.push(`${redirectTo}?redirect=${pathname}`);
    } else {
    }
  }, [user, router, pathname, redirectTo]);
};
