import {
  ChevronLeft,
  Ghost,
  Key,
  LucideProps,
  type Icon as LucideIcon,
} from "lucide-react";

import { BiLogoGoogle } from "react-icons/bi";

export type Icon = LucideIcon;

export const Icons = {
  back: ChevronLeft,
  ghost: Ghost,
  key: Key,
  google: ({ ...props }: LucideProps) => <BiLogoGoogle {...props} />,
};
