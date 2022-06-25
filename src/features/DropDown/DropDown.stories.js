import React from "react";
import { useArgs } from "@storybook/client-api";
import DropDownDemo from "./DropDownDemo";

export default {
  title: "Feature/Dropdown",
  component: DropDownDemo,
  argTypes: {},
  parameters: {
    componentSubtitle: "Dropdown",
  },
};

const Template = (args) => {
  const [{ isHover }, updateArgs] = useArgs();

  const mouseOver = () => {
    updateArgs({ isHover: true });
  };
  const mouseLeave = () => {
    updateArgs({ isHover: false });
  };

  const stateArgs = {
    isHover,
    mouseOver,
    mouseLeave,
  };

  return <DropDownDemo {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  btnWidth: 200,
  btnHeight: 50,
  width: 200,
  title: "DropDown1",
  dropDownItems: ["Item1", "Item2", "Item3", "Item4", "Item5"],
};
