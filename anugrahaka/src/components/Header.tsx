import { BellIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import Search from "./Search";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";
import Image from "next/image";

type NavButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  url?: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  imageUrl?: string;
};

const rightSideButtons: NavButtonProps[] = [
  {
    name: "messages",
    url: "#",
    icon: ChatBubbleIcon,
  },
  {
    name: "notification",
    url: "#",
    icon: BellIcon,
  },
  {
    name: "user",
    url: "#",
    imageUrl:
      "https://media.gq-magazine.co.uk/photos/5d1396ffb6fee94ed7c9e909/master/pass/Straboy-GQ-25Nov16_b.jpg",
  },
];

export const NavButton: React.FC<NavButtonProps> = ({
  name,
  icon: Icon,
  imageUrl,
  className,
  ...props
}) => {
  if (Icon) {
    return (
      <div
        className={`p-2 bg-background cursor-pointer w-10 h-10 inline-flex items-center justify-center rounded-full ${className}`}
        {...props}
      >
        <Icon />
      </div>
    );
  }

  if (imageUrl) {
    return (
      <Image
        className={`object-cover w-10 h-10 rounded-full ${className}`}
        src={imageUrl}
        alt={`${name}-avatar`}
        width={100}
        height={100}
        {...props}
      />
    );
  }

  return null;
};

function Header() {
  return (
    <div className="w-full min-h-20 bg-white rounded-t-3xl flex items-center p-5">
      <div className="w-1/4">
        <Image height={10} width={100} src="/logo.png" alt="logo" />
      </div>
      <div className="w-1/2 flex justify-center">
        <Search />
      </div>
      <div className="w-1/4 flex justify-end gap-2">
        {rightSideButtons.map((btn, index) => (
          <NavButton
            key={btn.name + index}
            name={btn.name}
            url={btn.url}
            icon={btn.icon}
            imageUrl={btn.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
