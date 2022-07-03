import React from "react";
import { useArgs } from "@storybook/client-api";
import DropDown from "./DropDown";

export default {
  title: "Feature/Dropdown",
  component: DropDown,
  argTypes: {
    label: {
      title: "titleText",
      type: { name: "string", required: false },
      description: "specifing the title.",
      defaultValue: "Dropdown label",
    },
    hideLabel: {
      title: "titleText",
      type: { name: "boolean", required: false },
      description: "controlling the displaying label.",
      defaultValue: false,
    },
    warn: {
      title: "warnText",
      type: { name: "string", required: false },
      description: "specifying the warning.",
      defaultValue: "This is some helper text",
    },
    hideWarn: {
      title: "warnText",
      type: { name: "boolean", required: false },
      description: "controlling the displaying warn.",
      defaultValue: false,
    },
    size: {
      title: "size",
      type: { name: "select", required: true },
      description: "controlling the displaying warn.",
      defaultValue: "middle",
      options: ["small", "middle", "large"],
    },
    zIndex: {
      title: "z-index",
      type: { name: "number", required: false },
      description: "handling the the value of z-index.",
      defaultValue: 300,
    },
    open: {
      title: "open",
      type: { name: "boolean", required: true },
      description: "handling the suggestion.",
      defaultValue: false,
      control: {
        type: null,
      },
    },
    seletedItem: {
      title: "selectedItem",
      type: { name: "number", required: true },
      description: "clicked Item Index",
      defaultValue: 0,
      control: {
        type: null,
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
