import { ClockIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import React from "react";

export type PaneButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  color?: string;
};

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  red: { bg: "bg-red-100", text: "text-red-600" },
};

const paneButtons: PaneButtonProps[] = [
  { name: "Home", icon: HomeIcon, color: "blue" },
  { name: "Homies", icon: PersonIcon, color: "green" },
  { name: "Events", icon: ClockIcon, color: "red" },
];

export const PaneButton = ({
  name,
  icon,
  color,
  className = "",
  ...props
}: PaneButtonProps) => {
  const Icon = icon;

  const defaultColors = { bg: "bg-selected", text: "text-blue-600" };
  const { bg, text } = color ? colorMap[color] || defaultColors : defaultColors;

  return (
    <button
      className={`px-4 py-2 w-full flex items-center rounded-xl font-semibold hover:bg-white ${className}`}
      {...props}
    >
      <span
        className={`${bg} rounded-full mt-[1px] ml-2 w-8 h-8 inline-flex items-center justify-center`}
      >
        <Icon className={text} width={20} height={20} />
      </span>
      <span className="ml-3">{name}</span>
    </button>
  );
};

function LeftSidePane() {
  return (
    <div className="w-1/5">
      <div className="px-4">
        {paneButtons.map((btn, index) => (
          <PaneButton
            key={btn.name + index}
            name={btn.name}
            icon={btn.icon}
            color={btn.color}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftSidePane;
