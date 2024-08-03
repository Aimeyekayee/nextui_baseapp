import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./navigation";
import { fontSans, fontSansThai, fontSansJp } from "@/config/fonts";

// Import locale messages explicitly
const localeMessages = {
  en: () => import("@/i18n/en.json"),
  th: () => import("@/i18n/th.json"),
  jp: () => import("@/i18n/jp.json"),
};

const localeFonts = {
  en: fontSans.variable,
  th: fontSansThai.variable,
  jp: fontSansJp.variable,
};

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  // Use the localeMessages map to load the correct messages
  const messages = (
    await localeMessages[locale as keyof typeof localeMessages]()
  ).default;

  // Return messages and font variable
  return {
    messages,
    font: localeFonts[locale as keyof typeof localeFonts],
  };
});
