import React from "react";
import Button from "./Button";

export default {
  title: "Feature/Button",
  component: Button,
  argTypes: {
    name: {
      name: "name",
      type: { name: "string", required: false },
      description: "Specify the name of the Button.",
      defaultValue: "Button",
    },
    size: {
      name: "size",
      type: { name: "select", required: false },
      description: "Specify the size of the Button.",
      table: {
        type: {
          summary: `small middle large xlarge 2xlarge`,
        },
      },
      defaultValue: "middle",
      options: ["small", "middle", "large", "xlarge", "2xlarge"],
    },
    border: {
      name: "border",
      type: { required: false },
      defaultValue: "none",
      control: { type: null },
      table: {
        disable: true,
      },
    },
    bgColor: {
      table: {
        disable: true,
      },
    },
    color: {
      type: { required: false },
      defaultValue: "white",
      control: { type: null },
      table: {
        disable: true,
      },
    },
    tabIndex: {
      name: "tabIndex",
      type: { name: "number", required: false },
      description: "Handling the tabindex property of the Button",
      defaultValue: 0,
    },
    hover: {
      table: {
        disable: true,
      },
    },
    active: {
      table: {
        disable: true,
      },
    },
    onClick: {
      name: "onClick",
      type: { required: false },
      description:
        "Provide an optional function to be called when the button element is clicked",
      table: {
        type: {
          summary: "func",
        },
      },
    },
    onMouseEnter: {
      name: "onMouseEnter",
      type: { required: false },
      description:
        "Provide an optional function to be called when the mouse enters the button element",
      table: {
        type: {
          summary: "func",
        },
      },
    },
    onMouseLeave: {
      name: "onMouseLeave",
      type: { required: false },
      description:
        "Provide an optional function to be called when the mouse leaves the button element",
      table: {
        type: {
          summary: "func",
        },
      },
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
  border: "none",
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
    border: "white",
    bgColor: "#024fe5",
    color: "white",
  },
  active: {
    border: "white",
    bgColor: "#022b9d",
    color: "white",
  },
  color: "#0e62fe",
  border: "1px solid #0e62fe",
};
