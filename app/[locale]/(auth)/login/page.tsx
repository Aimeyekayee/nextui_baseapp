"use client";

import React from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TpmIcon } from "@/components/icon/tpm-logo";
import { login } from "@/action/user.action";
import { UxSceneStore } from "@/store/uxscene.store";
import { UserStore } from "@/store/user.store";
import { useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { signInSchema, TSignInSchema } from "@/types/user.type";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export default function Login() {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading } = UxSceneStore.getState();
  const { setUser } = UserStore.getState();
  const [isVisible, setIsVisible] = React.useState(false);
  const p = useTranslations("page");
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (form: TSignInSchema) => {
    try {
      setIsLoading(true);
      9;
      const response = await toast.promise(login(form), {
        loading: "Authenticating...",
        success: "Login Successful!",
        error: "Login Failed. Please try again or contact admin",
      });

      setUser(response);
      const redirectTo = searchParams.get("redirect") ?? "/";
      router.push(redirectTo);
    } catch (error) {
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <div className="flex h-min-screen  w-full flex-col items-center justify-center pb-44">
      <div className="flex flex-col items-center pb-6">
        <TpmIcon size={60} />
        <p className="text-xl font-medium">{p("login.title.welcome_header")}</p>
        <p className="text-small text-default-500">
          {p("login.title.welcome_t")}
        </p>
      </div>
      <div className="mt-2 flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 py-6 shadow-small">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("username")}
            label={p("login.form.emp_no")}
            name="username"
            placeholder={p("login.form.emp_no_label")}
            type="text"
            variant="bordered"
            required
          />
          <Input
            required
            {...register("password")}
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="pointer-events-none text-2xl text-default-400"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label={p("login.form.password")}
            name="password"
            placeholder={p("login.form.password_label")}
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex items-center justify-center px-1 py-2">
            <Checkbox name="remember" size="sm">
              {p("login.form.remember")}
            </Checkbox>
          </div>
          <Button
            color="primary"
            type="submit"
            variant="solid"
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            style={{
              background: theme === "light" ? "#2D3C51" : "#fff",
              color: theme === "light" ? "#fff" : "#2D3C51",
            }}
          >
            {p("login.title.login")}
          </Button>
        </form>
        <div className="flex items-center gap-4">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">
            {p("login.content.or")}
          </p>
          <Divider className="flex-1" />
        </div>
        <p className="text-center text-small">
          {p("login.content.facing_problem")}&nbsp;
          <Link href="#" size="sm">
            {p("login.content.contact_admin")}
          </Link>
        </p>
      </div>
    </div>
  );
}
