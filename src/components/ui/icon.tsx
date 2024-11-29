import { IconName } from "@/types/icon-sprites";
import { type SVGProps } from "react";
import spriteHref from "@/assets/svg-sprites/sprite.svg";
import { twMerge } from "tailwind-merge";
export function Icon({
  name,
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  return (
    <svg {...props} className={twMerge("h-5 w-5", className)}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
}
