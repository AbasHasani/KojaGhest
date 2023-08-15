'use client'
import { SegmentedControl } from "@mantine/core";
import { FC } from "react";

interface Props {
  options: string[];
}

const Options: FC<Props> = ({ options }) => {
  return (
    <SegmentedControl
      fullWidth
      size="sm"
      data={options.map((option) => ({ value: option, label: option }))}
    />
  );
};

export default Options;
