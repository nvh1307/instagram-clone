import React from "react";
import { Story } from "./";

type Iusers = {
  username: string;
  image: string;
}[];

const users: Iusers = [
  {
    username: "dali__ma",
    image: "/images/avatars/dali.jpg",
  },
  {
    username: "raphael_v",
    image: "/images/avatars/raphael.jpg",
  },
  {
    username: "steve_micro",
    image: "/images/avatars/steve.jpg",
  },
  {
    username: "orwell_reactjs",
    image: "/images/avatars/orwell.jpg",
  },
  {
    username: "dali__ma",
    image: "/images/avatars/dali.jpg",
  },
  {
    username: "raphael_v",
    image: "/images/avatars/raphael.jpg",
  },
  {
    username: "steve_micro",
    image: "/images/avatars/steve.jpg",
  },
  {
    username: "orwell_reactjs",
    image: "/images/avatars/orwell.jpg",
  },
];

export const Stories: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark dark:text-white box-border overflow-y-hidden relative py-[10px] mt-12 md:mt-8 block scroll-smooth scrollbar-thin">
      <div className="flex space-x-1">
        {users?.map((u, i) => (
          <Story key={i} me={i === 0} avatar={u.image} username={u.username} />
        ))}
      </div>
    </div>
  );
};
