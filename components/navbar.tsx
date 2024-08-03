"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "@/navigation";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import LanguageSwitcher from "./languages-switch";
import AvatarDropdown from "./dropdown/avatar-dropdown";
import { UserStore } from "@/store/user.store";
import { useLocale } from "next-intl";
import toast from "react-hot-toast";
import { Button } from "@nextui-org/react";

export const NavigationBar = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const user = UserStore((state) => state.user);
  const avatarDrop = user ? (
    <AvatarDropdown
      email={user.email}
      employee_no={user.employee_no !== null ? parseInt(user.employee_no) : 0}
    />
  ) : (
    <p onClick={() => router.push(`/login`)} className="cursor-pointer">
      login
    </p>
  );

  const pageNotShow = ["/home", "/login"];
  const shouldShowNavbar = !pageNotShow.includes(pathname);
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <p className="font-bold text-inherit">HRD System</p>
          </NextLink>
        </NavbarBrand>
        {shouldShowNavbar ? (
          <ul className="hidden lg:flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        ) : null}
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <ThemeSwitch />
        <LanguageSwitcher />
        {pathname.includes("login") ? null : avatarDrop}
      </NavbarContent>
    </NextUINavbar>
  );
};
