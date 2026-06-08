"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { useDemo } from "@/contexts/DemoContext";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/images";
import { ROUTES } from "@/lib/navigation";

type AuthView = "login" | "register" | "forgot";

export function AuthForms() {
  const router = useRouter();
  const { messages } = useLocale();
  const { nav, auth, demo } = messages;
  const { showToast, showLegal } = useDemo();
  const [view, setView] = useState<AuthView>("login");
  const [resetSent, setResetSent] = useState(false);

  function handleSocialLogin(provider: string) {
    showToast(demo.socialSignIn.replace("{provider}", provider), "info");
    window.setTimeout(() => router.push(ROUTES.dashboard), 1200);
  }

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    showToast(demo.registerSuccess);
    window.setTimeout(() => router.push(ROUTES.dashboard), 1200);
  }

  return (
    <section className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface-container-lowest relative overflow-y-auto min-h-screen lg:min-h-0">
      <div className="absolute top-8 start-margin-mobile lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
            <Icon icon="deployed_code" size={20} />
          </div>
          <span className="font-display-lg text-headline-lg text-primary tracking-tight">
            {nav.brand}
          </span>
        </Link>
      </div>

      <div className="w-full max-w-[440px] space-y-8 pt-16 lg:pt-0">
        {view === "login" && (
          <div key="login" className="auth-form-enter">
            <header className="mb-10">
              <h3 className="font-headline-xl text-on-surface mb-2">
                {auth.login.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {auth.login.subtitle}
              </p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant block ms-1">
                  {auth.login.email}
                </label>
                <div className="relative group">
                  <Icon
                    icon="mail"
                    className="absolute start-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary"
                  />
                  <input
                    type="email"
                    placeholder={auth.login.emailPlaceholder}
                    className="w-full bg-surface-container border border-outline-variant rounded-xl py-3.5 ps-12 pe-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-label-md text-on-surface-variant">
                    {auth.login.password}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setResetSent(false);
                      setView("forgot");
                    }}
                    className="text-primary font-label-md hover:underline"
                  >
                    {auth.login.forgotPassword}
                  </button>
                </div>
                <div className="relative group">
                  <Icon
                    icon="lock"
                    className="absolute start-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary"
                  />
                  <input
                    type="password"
                    placeholder={auth.login.passwordPlaceholder}
                    className="w-full bg-surface-container border border-outline-variant rounded-xl py-3.5 ps-12 pe-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  />
                </div>
              </div>

              <Link
                href={ROUTES.dashboard}
                className="w-full bg-primary text-on-primary-container font-headline-lg py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/10 flex items-center justify-center"
              >
                {auth.login.signIn}
              </Link>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-surface-container-lowest text-on-surface-variant font-label-md">
                  {auth.login.orContinue}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleSocialLogin(auth.login.google)}
                className="flex items-center justify-center gap-3 bg-surface border border-outline-variant py-3 rounded-xl hover:bg-surface-variant transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Google" src={images.googleIcon} className="w-5 h-5" />
                <span className="font-label-md text-on-surface">
                  {auth.login.google}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin(auth.login.apple)}
                className="flex items-center justify-center gap-3 bg-surface border border-outline-variant py-3 rounded-xl hover:bg-surface-variant transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Apple"
                  src={images.appleIcon}
                  className="w-5 h-5 dark:invert-0 invert"
                />
                <span className="font-label-md text-on-surface">
                  {auth.login.apple}
                </span>
              </button>
            </div>

            <p className="text-center mt-10 font-body-md text-on-surface-variant">
              {auth.login.noAccount}{" "}
              <button
                type="button"
                onClick={() => setView("register")}
                className="text-primary font-bold hover:underline"
              >
                {auth.login.requestAccess}
              </button>
            </p>
          </div>
        )}

        {view === "register" && (
          <div key="register" className="auth-form-enter">
            <header className="mb-10">
              <h3 className="font-headline-xl text-on-surface mb-2">
                {auth.register.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {auth.register.subtitle}
              </p>
            </header>

            <form className="space-y-5" onSubmit={handleRegister}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant ms-1">
                    {auth.register.firstName}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-surface-container border border-outline-variant rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant ms-1">
                    {auth.register.lastName}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-surface-container border border-outline-variant rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant block ms-1">
                  {auth.register.email}
                </label>
                <input
                  type="email"
                  required
                  placeholder={auth.register.emailPlaceholder}
                  className="w-full bg-surface-container border border-outline-variant rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant block ms-1">
                  {auth.register.password}
                </label>
                <input
                  type="password"
                  required
                  placeholder={auth.register.passwordPlaceholder}
                  className="w-full bg-surface-container border border-outline-variant rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                />
              </div>
              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded bg-surface-container border-outline-variant text-primary focus:ring-primary"
                />
                <label className="text-xs text-on-surface-variant">
                  {auth.register.terms}{" "}
                  <button
                    type="button"
                    onClick={() => showLegal("terms")}
                    className="text-primary hover:underline"
                  >
                    {auth.register.termsLink}
                  </button>{" "}
                  {auth.register.and}{" "}
                  <button
                    type="button"
                    onClick={() => showLegal("privacy")}
                    className="text-primary hover:underline"
                  >
                    {auth.register.privacyLink}
                  </button>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary-container font-headline-lg py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
              >
                {auth.register.createWorkspace}
              </button>
            </form>

            <p className="text-center mt-8 font-body-md text-on-surface-variant">
              {auth.register.hasAccount}{" "}
              <button
                type="button"
                onClick={() => setView("login")}
                className="text-primary font-bold hover:underline"
              >
                {auth.register.logIn}
              </button>
            </p>
          </div>
        )}

        {view === "forgot" && (
          <div key="forgot" className="auth-form-enter">
            <button
              type="button"
              onClick={() => {
                setResetSent(false);
                setView("login");
              }}
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group"
            >
              <Icon
                icon="arrow_back"
                className="text-xl group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform rtl:rotate-180"
              />
              <span className="font-label-md">{auth.forgot.back}</span>
            </button>

            <header className="mb-10">
              <h3 className="font-headline-xl text-on-surface mb-2">
                {auth.forgot.title}
              </h3>
              <p className="font-body-md text-on-surface-variant">
                {auth.forgot.subtitle}
              </p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant block ms-1">
                  {auth.forgot.email}
                </label>
                <input
                  type="email"
                  placeholder={auth.forgot.emailPlaceholder}
                  className="w-full bg-surface-container border border-outline-variant rounded-xl py-3.5 px-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => setResetSent(true)}
                className="w-full bg-primary text-on-primary-container font-headline-lg py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
              >
                {auth.forgot.sendLink}
              </button>
            </form>

            {resetSent && (
              <div className="mt-6 p-4 rounded-xl bg-primary-container/20 border border-primary/20 text-center animate-pulse">
                <Icon
                  icon="check_circle"
                  className="text-primary mb-2 mx-auto"
                />
                <p className="text-sm text-primary font-medium">
                  {auth.forgot.success}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 end-0 w-64 h-64 bg-primary/5 blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
