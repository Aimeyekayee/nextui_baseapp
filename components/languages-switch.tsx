import React from "react";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, locales } from "@/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import IconLanguageKatakana, {
  EnglishJiIcon,
  JapaneseJiIcon,
  ThaiJiIcon,
} from "./icons";

const LanguageSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onDropdownChange = (value: any) => {
    startTransition(() => {
      // router.replace(pathname, { locale: value }); //*original
      router.replace(`/${pathname}`, { locale: value });
    });
  };

  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const IconReturn = (locale: string) => {
    if (locale === "en") {
      return <EnglishJiIcon className={iconClasses} />;
    } else if (locale === "th") {
      return <ThaiJiIcon className={iconClasses} />;
    } else {
      return <JapaneseJiIcon className={iconClasses} />;
    }
  };
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <Dropdown placement="bottom-end" isDisabled={isPending}>
        <DropdownTrigger>
          <div>
            <IconLanguageKatakana />
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language Selection"
          onAction={(key) => onDropdownChange(key)}
          defaultSelectedKeys={locale}
        >
          {locales.map((locale) => (
            <DropdownItem
              key={locale}
              startContent={IconReturn(locale)}
              value={locale}
            >
              {t("locale", { locale })}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
