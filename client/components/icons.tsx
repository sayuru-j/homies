import {
  ChevronLeft,
  Ghost,
  Key,
  LucideProps,
  Lollipop,
  Loader2,
  Plus,
  UserPlus,
  type Icon as LucideIcon,
} from "lucide-react";

import { BiLogoGoogle } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";

export type Icon = LucideIcon;

export const Icons = {
  back: ChevronLeft,
  code: AiOutlineCode,

  design: MdDesignServices,
  ghost: Ghost,
  key: Key,
  lollipop: Lollipop,
  plus: Plus,
  spinner: Loader2,
  user: UserPlus,
  google: ({ ...props }: LucideProps) => <BiLogoGoogle {...props} />,
};
