'use client'
import { SegmentedControl } from "@mantine/core";
import { FC } from "react";

interface Props {
  changeSorting: any;
}

const Options: FC<Props> = ({changeSorting}) => {
  const options = [
    {per:"پربازدیدترین", en: "viewed"},
    {per:"ارزان ترین", en: "cheapest"},
    {per:"گران ترین", en: "expensive"},
    {per:"پیشنهاد و خریداران", en: "suggested"},
  ];
  return (
    <SegmentedControl
      fullWidth
      size="sm"
      data={options.map((option) => ({ value: option.en, label: option.per }))}
      onChange={(value) => {
        changeSorting(value)
      }}
    />
  );
};

export default Options;
