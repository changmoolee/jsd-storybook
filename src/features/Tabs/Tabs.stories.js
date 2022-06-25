import React from "react";
import { useArgs } from "@storybook/client-api";
import TabsDemo from "./TabsDemo";

export default {
  title: "Feature/Tabs",
  component: TabsDemo,
  parameters: {
    componentSubtitle: "Tab",
  },
};

const Template = (args) => {
  const [{ clicked }, setClicked] = useArgs();

  const handleClick = (index) => {
    setClicked({ clicked: index });
  };

  const stateArgs = {
    clicked,
    handleClick,
  };

  return <TabsDemo {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  tabs: ["tab1", "tab2", "tab3"],
  width: 200,
  height: 50,
};
