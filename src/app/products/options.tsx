'use client'
import { SegmentedControl } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  changeSorting: (sort: string)=>any
}

const Options: FC<Props> = ({changeSorting}) => {
  const options = [
    {per:"پربازدیدترین", en: "viewed"},
    {per:"ارزان ترین", en: "cheapest"},
    {per:"گران ترین", en: "expensive"},
    {per:"پیشنهاد و خریداران", en: "suggested"},
  ];
  const router = useRouter();
  return (
    <SegmentedControl
      fullWidth
      size="sm"
      data={options.map((option) => ({ value: option.en, label: option.per }))}
      className="md:m-3 shadow-lg"
      onChange={(value) => {
        changeSorting(value)
      }}
    />
  );
};

export default Options;
