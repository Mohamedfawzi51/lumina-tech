"use client";

import Link from "next/link";
import { useLocale } from "@/contexts/LocaleContext";
import { Icon } from "@/components/Icon";
import { images } from "@/lib/images";

const userAvatars = [images.authUser1, images.authUser2, images.authUser3];

export function AuthBranding() {
  const { messages } = useLocale();
  const { nav, auth } = messages;

  return (
    <section className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-margin-desktop overflow-hidden border-e border-outline-variant/30">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="LuminaTech Infrastructure"
          src={images.authBg}
          className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10">
        <Link href="/" className="flex items-center gap-3 animate-float">
          <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-lg">
            <Icon icon="deployed_code" size={28} />
          </div>
          <h1 className="font-display-lg text-headline-xl text-primary tracking-tighter">
            {nav.brand}
          </h1>
        </Link>
      </div>

      <div className="relative z-10 max-w-lg">
        <h2 className="font-display-lg text-display-lg text-on-surface mb-6 leading-none">
          {auth.headline}
          <br />
          <span className="text-primary">{auth.headlineAccent}</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant">{auth.description}</p>
      </div>

      <div className="relative z-10 flex gap-gutter flex-wrap items-center">
        <div className="flex -space-x-3 rtl:space-x-reverse">
          {userAvatars.map((src) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={src}
              alt=""
              src={src}
              className="w-10 h-10 rounded-full border-2 border-background object-cover"
            />
          ))}
          <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-background flex items-center justify-center text-[10px] font-bold">
            +2k
          </div>
        </div>
        <p className="font-label-md text-on-surface-variant">{auth.trustedBy}</p>
      </div>
    </section>
  );
}
