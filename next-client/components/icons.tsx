import {
  Bell,
  ChevronLeft,
  MoreHorizontal,
  Ghost,
  Key,
  Home,
  LucideProps,
  Lollipop,
  Loader2,
  ListPlus,
  Plus,
  Search,
  UserPlus,
  UserCircle2,
  type Icon as LucideIcon,
} from "lucide-react";

import { BiLogoGoogle } from "react-icons/bi";
import { AiOutlineCode, AiTwotoneHome } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";

export type Icon = LucideIcon;

export const Icons = {
  back: ChevronLeft,
  bell: Bell,
  code: AiOutlineCode,
  design: MdDesignServices,
  ghost: Ghost,
  key: Key,
  home: Home,
  lollipop: Lollipop,
  list: ListPlus,
  plus: Plus,
  spinner: Loader2,
  search: Search,
  tripleDot: MoreHorizontal,
  user: UserPlus,
  userp: UserCircle2,
  google: ({ ...props }: LucideProps) => <BiLogoGoogle {...props} />,
};

interface DynamicIconProps extends LucideProps {
  iconName: string;
}

//
const DynamicIcon = ({ iconName, ...props }: DynamicIconProps) => {
  const IconComponent: Icon = Icons[iconName];

  return <IconComponent {...props} />;
};

export default DynamicIcon;
