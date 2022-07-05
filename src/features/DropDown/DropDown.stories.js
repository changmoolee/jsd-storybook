import React from "react";
import { useArgs } from "@storybook/client-api";
import DropDown from "./DropDown";

export default {
  title: "Feature/Dropdown",
  component: DropDown,
  argTypes: {
    items: {
      name: "items",
      description:
        "We try to stay as generic as possible here to allow individuals to pass in a collection of whatever kind of data structure they prefer.",
      type: { name: "array", required: false },
      table: {
        type: {
          summary: "array",
        },
      },
      control: {
        type: null,
      },
    },
    label: {
      name: "label",
      type: { name: "string", required: false },
      description: "Specify the label of the DropDown.",
      defaultValue: "Dropdown label",
    },
    hideLabel: {
      name: "hideLabel",
      type: { name: "boolean", required: false },
      description: "Controlling the displaying label.",
      defaultValue: false,
    },
    warn: {
      name: "warn",
      type: { name: "string", required: false },
      description: "Specify the warning of the DropDown.",
      defaultValue: "This is some helper text",
    },
    hideWarn: {
      name: "hideWarn",
      type: { name: "boolean", required: false },
      description: "Controlling the displaying warning.",
      defaultValue: false,
    },
    size: {
      name: "size",
      type: { name: "select", required: false },
      description: "Specify the size of the DropDown.",
      table: {
        type: { summary: `small middle large` },
      },
      defaultValue: "middle",
      options: ["small", "middle", "large"],
    },
    zIndex: {
      name: "zIndex",
      type: { name: "number", required: false },
      description: "Handling the z-index property of the DropDown.",
      defaultValue: 300,
    },
    open: {
      name: "open",
      type: { name: "boolean", required: false },
      description: "Handling the DropDown suggestion.",
      defaultValue: false,
      table: {
        disable: true,
      },
    },
    seletedItem: {
      name: "selectedItem",
      type: { name: "number", required: false },
      description: "Clicked Index of the Item in the suggestion.",
      defaultValue: 0,
      table: {
        disable: true,
      },
    },
    handleSuggestion: {
      table: {
        disable: true,
      },
    },
    closeSuggestion: {
      table: {
        disable: true,
      },
    },
    clickItem: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    componentSubtitle: "Dropdown",
  },
};

const Template = (args) => {
  const [{ open }, setOpen] = useArgs();
  const [{ seletedItem }, setSeletedItem] = useArgs();

  const handleSuggestion = () => {
    setOpen({ open: !open });
  };

  const closeSuggestion = () => {
    setOpen({ open: false });
  };

  const clickItem = (index) => {
    setSeletedItem({ seletedItem: index });
  };

  const stateArgs = {
    open,
    seletedItem,
    handleSuggestion,
    closeSuggestion,
    clickItem,
  };

  return <DropDown {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

const example = [
  { id: "option1", text: "text1", disabled: true },
  { id: "option2", text: "text2" },
  { id: "option3", text: "text3" },
  { id: "option4", text: "text4" },
  { id: "option5", text: "text5" },
  { id: "option6", text: "text6" },
  { id: "option7", text: "text7" },
];

Primary.args = {
  items: example,
};
