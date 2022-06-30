import React from "react";
import { useArgs } from "@storybook/client-api";
import Search from "./Search";

export default {
  title: "Feature/Search",
  component: Search,
  argTypes: {
    defaultValue: {
      name: "defaultValue",
      type: { name: "string", required: false },
      description: "setting the default value in input box.",
      defaultValue: "",
    },
    value: {
      name: "value",
      type: { name: "string", required: false },
      description: "setting the value in input box.",
      defaultValue: "",
    },
    autoComplete: {
      name: "autoComplete",
      type: { name: "select", required: true },
      description: "setting the autoComplete property.",
      defaultValue: "off",
      options: ["on", "off"],
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: true },
      description: "handling the disabled state.",
      defaultValue: false,
    },
  },
};

const Template = (args) => {
  const [{ value }, setValue] = useArgs();

  const clearInput = () => {
    setValue({ value: "" });
  };

  const updateValue = (event) => {
    setValue({ value: event.target.value });
  };

  const stateArgs = {
    value,
    clearInput,
    updateValue,
  };

  return <Search {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});
