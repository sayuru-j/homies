import { ImageIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { NavButton as PostType } from "./Header";

const postTypes = [
  {
    name: "photos",
    icon: ImageIcon,
  },
];

function MiddlePane() {
  return (
    <div className="w-3/5 px-10">
      <div className="w-full min-h-28 p-4 bg-white rounded-3xl space-y-2">
        <div className="flex items-center gap-4 p-2">
          <Image
            className="object-cover w-14 h-14 rounded-full"
            src={
              "https://media.gq-magazine.co.uk/photos/5d1396ffb6fee94ed7c9e909/master/pass/Straboy-GQ-25Nov16_b.jpg"
            }
            alt={"avatar"}
            width={100}
            height={100}
          />
          <input
            type="text"
            disabled
            placeholder="Bullbola Mahaththayata Jaya Wewa!"
            className="!outline-none cursor-pointer w-full p-4 bg-background rounded-full"
          />
        </div>
        <div className="h-[2px] w-full bg-black/5" />
        <div className="ml-3">
          {postTypes.map(({ icon, name }) => (
            <PostType className="border" name={name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiddlePane;
