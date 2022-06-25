import React from "react";
import { useArgs } from "@storybook/client-api";
import PositionedToastDemo from "./PositionedToastDemo";

export default {
  title: "Feature/Toast",
  component: PositionedToastDemo,
  argTypes: {},
  parameters: {
    componentSubtitle: "Toast",
  },
};

const Template = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const closeToast = () => {
    updateArgs({ open: false });
  };

  const stateArgs = { closeToast };

  return <PositionedToastDemo {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  width: 400,
  description: "slide Toast!",
  color: "black",
  open: true,
};
