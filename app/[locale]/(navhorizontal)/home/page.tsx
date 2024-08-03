"use client";

import React, { useEffect } from "react";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { TpmIcon } from "@/components/icon/tpm-logo";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";
import useContenti18n from "@/hook/useContenti18n";
import { UserStore } from "@/store/user.store";
import ButtonRouter from "@/components/button/router-button";

export default function Home() {
  const { loadUser } = UserStore.getState();
  const p = useTranslations("page");
  const { faqs } = useContenti18n();
  const footerNavigation = {
    services: [
      { name: "Dekidaka", href: "#" },
      { name: "Tools Record", href: "#" },
    ],
  };
  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                className="text-default-400 whitespace-nowrap"
                href={item.href}
                size="sm"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    []
  );

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl sm:px-6 lg:px-8 flex flex-col justify-between flex-1 h-min-screen">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-12 py-20 sm:py-32 lg:py-40">
        <h2 className="px-2 text-3xl leading-7">
          <span className="inline-block lg:hidden bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text">
            {p("home.header.line_1")}&nbsp;{p("home.header.line_2")}&nbsp;
            {p("home.header.line_3")}
          </span>
          <span className="hidden bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text pt-4 text-5xl font-semibold tracking-tight text-transparent dark:to-foreground-200 lg:inline-block">
            {p("home.header.line_1")}
            <br />
            {p("home.header.line_2")} <br />
            {p("home.header.line_3")}
          </span>
        </h2>

        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          itemClasses={{
            base: "px-0 sm:px-6",
            title: "font-medium",
            trigger: "py-6 flex-row-reverse",
            content: "pt-0 pb-6 text-base text-default-500",
          }}
          items={faqs}
          selectionMode="multiple"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={24} />}
              title={item.title}
            >
              <ButtonRouter route={item.url}>{item.label}</ButtonRouter>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <footer className="flex justify-between">
        <div className="flex w-full">
          <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-4 md:mt-0">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <div className="flex items-center">
                  <TpmIcon size={34} />
                </div>
              </div>
              <h1 className="font-semibold">Developed by</h1>
              <p className="text-center text-tiny text-default-400 md:text-start">
                DNTHBPK - Electrification TPMTECHチーム
              </p>
            </div>
            <div>
              <div>
                <div>
                  {renderList({
                    title: "Services",
                    items: footerNavigation.services,
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
