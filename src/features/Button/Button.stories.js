import React from "react";
import Button from "./Button";
import { mainColor, subColor } from "../../styled";

export default {
  title: "Feature/Button",
  component: Button,
  argTypes: {
    color: {
      name: "color",
      type: { name: "string", required: true },
      description: "example111",
      defaultValue: "white",
    },
    border: {
      name: "border",
      type: { name: "string", required: false },
      description: "example122",
      defaultValue: "none",
    },
  },
  parameters: {
    componentSubtitle: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  width: 100,
  height: 50,
  bgColor: mainColor,
};

export const Secondary = Template.bind({});

Secondary.args = {
  width: 100,
  height: 50,
  bgColor: subColor,
};

export const Ghost = Template.bind({});

Ghost.args = {
  width: 100,
  height: 50,
  bgColor: "white",
  border: `1px solid black`,
  color: "black",
};
