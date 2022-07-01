import React from "react";
import { useArgs } from "@storybook/client-api";
import ToggleDemo from "./ToggleDemo";

export default {
  title: "Feature/Toggle",
  component: ToggleDemo,
  argTypes: {
    size: {
      title: "size",
      type: { name: "select", required: true },
      defaultValue: "middle",
      options: ["small", "middle", "large"],
      table: {
        defaultValue: { summary: "middle" },
        type: {
          summary: "Shows options to the Badge",
          // detail: "Listing of available options",
        },
      },
    },
    toggled: {
      title: "toggled",
      type: { name: "boolean", required: true },
      defaultValue: true,
    },
    hideHeaderlabel: {
      title: "hideHeaderlabel",
      type: { name: "boolean", required: true },
      defaultValue: false,
    },
    headerlabel: {
      title: "headerlabel",
      type: { name: "string", required: false },
      defaultValue: "Toggle element label",
    },
    hideSidelabel: {
      title: "hideSidelabel",
      type: { name: "boolean", required: true },
      defaultValue: false,
    },
    labelA: {
      title: "labelA",
      type: { name: "string", required: false },
      defaultValue: "On",
    },
    labelB: {
      title: "labelB",
      type: { name: "string", required: false },
      defaultValue: "Off",
    },
    onClick: {
      title: "onClick",
    },
  },
  parameters: {
    docs: {
      page: null,
    },
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

Primary.args = {};

export const MiniToggle = Template.bind({});

MiniToggle.args = {
  size: "mini",
};

MiniToggle.storyName = "Mini Toggle";
