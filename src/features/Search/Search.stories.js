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
      description: "Setting the default value in input box.",
      defaultValue: "",
    },
    value: {
      name: "value",
      type: { name: "string", required: false },
      description: "Setting the value in input box.",
      defaultValue: "",
      table: {
        disable: true,
      },
    },
    autoComplete: {
      name: "autoComplete",
      type: { name: "select", required: false },
      description:
        "Specify an optional value for the autocomplete property on the underlying '<input>', defaults to 'off'.",
      defaultValue: "off",
      options: ["on", "off"],
      table: {
        type: {
          summary: `on off`,
        },
      },
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      description: "handling the disabled state of the Search.",
      defaultValue: false,
    },
    clearInput: {
      table: {
        disable: true,
      },
    },
    updateValue: {
      table: {
        disable: true,
      },
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
