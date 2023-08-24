"use client";
import { FC, useState } from "react";
import Options from "./options";
import Provider from "./provider";

interface Props {
  providers: {
    id: string | number;
    name: string | null;
    image: string | null;
    // createdAt: Date;
    // updatedAt: Date;
    highestCredit: number;
    website: string;
    specialContracts: string;
    // userId: string;
  }[];
}

const Providers: FC<Props> = ({ providers }) => {
  const [sorting, setSorting] = useState("viewed");
  return (
    <div className="flex-1 w-full">
      <Options changeSorting={setSorting} />
      <div className="">
        {providers
          .slice()
          .sort((a, b) =>
            sorting == "viewed"
              ? 0
              : sorting == "expensive"
              ? a.highestCredit - b.highestCredit
              : sorting == "cheapest"
              ? b.highestCredit - a.highestCredit
              : 0
          )
          .map((provider) => (
            <Provider {...provider} key={provider.id.toString()} />
          ))}
      </div>
    </div>
  );
};

export default Providers;
