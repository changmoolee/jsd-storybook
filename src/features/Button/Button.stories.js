import React from "react";
import Button from "./Button";

export default {
  title: "Feature/Button",
  component: Button,
  argTypes: {
    name: {
      name: "button",
      type: { name: "string", required: true },
      description: "naming the button",
      defaultValue: "Button",
    },
    border: {
      name: "border",
      type: { name: "string", required: false },
      description: "handling the border of the button",
      defaultValue: "none",
    },
    color: {
      name: "color",
      type: { name: "string", required: true },
      description: "handling the color of the button",
      defaultValue: "white",
    },
    size: {
      name: "size",
      type: { name: "select", required: true },
      description: "handling the size of the button",
      defaultValue: "large",
      options: ["small", "middle", "large", "xlarge", "2xlarge"],
    },
    tabIndex: {
      name: "tabIndex",
      type: { name: "number", required: true },
      description: "handling the tabindex property of the button",
      defaultValue: 0,
    },
    onClick: {
      name: "onClick",
    },
    onMouseEnter: {
      name: "onMouseEnter",
    },
    onMouseLeave: {
      name: "onMouseLeave",
    },
  },
  parameters: {
    componentSubtitle: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  bgColor: "#0e62fe",
  hover: {
    bgColor: "#024fe5",
  },
  active: {
    bgColor: "#022b9d",
  },
};

export const Danger = Template.bind({});

Danger.args = {
  bgColor: "#da1e28",
  hover: {
    bgColor: "#b91823",
  },
  active: {
    bgColor: "#760c11",
  },
};

export const Ghost = Template.bind({});

Ghost.args = {
  bgColor: "white",
  hover: {
    bgColor: "#e8e8e8",
  },
  active: {
    bgColor: "#c5c5c5",
    border: "1px solid white",
  },
  color: "#0e62fe",
};

export const Secondary = Template.bind({});

Secondary.args = {
  bgColor: "#393939",
  hover: {
    bgColor: "#424242",
  },
  active: {
    bgColor: "#6e6e6e",
  },
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  bgColor: "transparent",
  hover: {
    bgColor: "#024fe5",
    color: "white",
  },
  active: {
    bgColor: "#022b9d",
    color: "white",
  },
  color: "#0e62fe",
  border: "1px solid #0e62fe",
};
