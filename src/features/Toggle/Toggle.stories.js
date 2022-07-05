import React from "react";
import { useArgs } from "@storybook/client-api";
import Toggle from "./Toggle";

export default {
  title: "Feature/Toggle",
  component: Toggle,
  argTypes: {
    size: {
      name: "size",
      type: { name: "select", required: false },
      description: "Specify the size of the Toggle.",
      defaultValue: "middle",
      options: ["small", "middle", "large"],
      table: {
        defaultValue: { summary: "middle" },
        type: {
          summary: `small middle large`,
        },
      },
    },
    toggled: {
      name: "toggled",
      type: { name: "boolean", required: false },
      description: "Specify whether the control is toggled",
      defaultValue: true,
      control: {
        disable: true,
      },
    },
    hideHeaderlabel: {
      name: "hideHeaderlabel",
      type: { name: "boolean", required: false },
      description: "Specify whether the header label should be hidden, or not",
      defaultValue: false,
    },
    headerlabel: {
      name: "headerlabel",
      type: { name: "string", required: false },
      description:
        "Provide the text that will be read by a screen reader when visiting this control.",
      defaultValue: "Toggle element label",
    },
    hideSidelabel: {
      name: "hideSidelabel",
      type: { name: "boolean", required: false },
      description: "Specify whether the label should be hidden, or not",
      defaultValue: false,
    },
    labelA: {
      name: "labelA",
      type: { name: "string", required: false },
      description: "Specify the label for the `off` position",
      defaultValue: "On",
    },
    labelB: {
      name: "labelB",
      type: { name: "string", required: false },
      description: "Specify the label for the `on` position",
      defaultValue: "Off",
    },
    onClick: {
      name: "onClick",
      type: { required: false },
      description:
        "Provide an event listener that is called when the control is clicked.",
      table: {
        type: { summary: "func" },
      },
    },
    handleToggle: {
      name: "onToggle",
      type: { required: false },
      description:
        "Provide an event listener that is called when the control is toggled.",
      table: {
        type: { summary: "func" },
      },
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

  return <Toggle {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {};

export const MiniToggle = Template.bind({});

MiniToggle.args = {
  size: "mini",
};

MiniToggle.storyName = "Mini Toggle";
