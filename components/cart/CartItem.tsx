"use client";

import { Icon } from "@/components/Icon";

type CartItemProps = {
  image: string;
  name: string;
  variant: string;
  price: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export function CartItem({
  image,
  name,
  variant,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="glass-card rounded-xl p-6 flex flex-col sm:flex-row gap-6 group transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <div className="w-full sm:w-40 h-40 bg-surface-container rounded-lg overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={name}
          src={image}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="grow flex flex-col justify-between py-1 min-w-0">
        <div className="flex justify-between gap-4">
          <div>
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              {name}
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 uppercase tracking-widest">
              {variant}
            </p>
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="text-on-surface-variant hover:text-error transition-colors h-fit shrink-0"
          >
            <Icon icon="delete" />
          </button>
        </div>

        <div className="flex items-end justify-between mt-6 gap-4 flex-wrap">
          <div className="flex items-center gap-4 bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant">
            <button
              type="button"
              onClick={onDecrease}
              disabled={quantity <= 1}
              className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-primary transition-colors disabled:opacity-40"
            >
              <Icon icon="remove" className="text-[18px]" />
            </button>
            <span className="font-label-md text-label-md min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={onIncrease}
              className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-primary transition-colors"
            >
              <Icon icon="add" className="text-[18px]" />
            </button>
          </div>
          <p className="font-headline-xl text-headline-xl text-primary">{price}</p>
        </div>
      </div>
    </div>
  );
}
