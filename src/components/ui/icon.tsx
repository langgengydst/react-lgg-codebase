import { IconName } from "@/types/icon-sprites";
import { type SVGProps } from "react";
import spriteHref from "@/assets/svg-sprites/sprite.svg";
export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
}
