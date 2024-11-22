"use client";

import Image from "next/image";
import React, { useState } from "react";

type Homie = {
  avatar: string;
  name: string;
  online: boolean;
};

const mockHomies: Homie[] = [
  { avatar: "", name: "Pop Maaluwa", online: true },
  { avatar: "", name: "Piggy Mahaththaya", online: false },
];

function ActiveHomies() {
  const [homies, setHomies] = useState<Homie[]>(mockHomies);
  return (
    <div>
      <h2 className="font-semibold ml-2">Active Homies</h2>
      <div className="mt-2">
        {homies.map((homie) => (
          <div
            key={homie.name}
            className="flex items-center gap-2 p-2 cursor-pointer hover:bg-white rounded-xl"
          >
            <div className="relative">
              <Image
                className="object-cover w-8 h-8 rounded-full"
                src={
                  "https://media.gq-magazine.co.uk/photos/5d1396ffb6fee94ed7c9e909/master/pass/Straboy-GQ-25Nov16_b.jpg"
                }
                alt={"avatar"}
                width={100}
                height={100}
              />
              <div
                className={`h-2 w-2 rounded-full absolute bottom-0 ${
                  homie.online ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>
            <div className="text-sm font-semibold">{homie.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveHomies;
