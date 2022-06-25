import React from "react";
import { useArgs } from "@storybook/client-api";
import ToggleDemo from "./ToggleDemo";

export default {
  title: "Feature/Toggle",
  component: ToggleDemo,
  argsTypes: {},
  parameters: {
    componentSubtitle:
      "Ability to switch from one setting value to another by clicking",
  },
};

const Template = (args) => {
  const [{ toggled }, updateArgs] = useArgs();

  const handleToggle = () => {
    updateArgs({ toggled: !toggled });
  };

  const stateArgs = {
    toggled,
    handleToggle,
  };

  return <ToggleDemo {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  height: 50,
  toggled: true,
};
