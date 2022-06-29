import React from "react";
import { useArgs } from "@storybook/client-api";
import TabsDemo from "./TabsDemo";
import { TabList, Tab, TabsDescriptions, TabsDescription } from "./TabsDemo";

export default {
  title: "Feature/Tabs",
  component: TabsDemo,
  argTypes: {
    clicked: {
      name: "clicked",
      type: { name: "number", required: true },
      description: "clicked Tab",
      defaultValue: 0,
    },
  },
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

const example = (
  <TabsDemo>
    <TabList>
      <Tab>child1</Tab>
      <Tab>child2</Tab>
      <Tab>child3</Tab>
      <Tab>child4</Tab>
    </TabList>
    <TabsDescriptions>
      <TabsDescription>child1</TabsDescription>
      <TabsDescription>child2</TabsDescription>
      <TabsDescription>child3</TabsDescription>
    </TabsDescriptions>
  </TabsDemo>
);

Primary.args = {
  width: 600,
  height: 50,
  children: example,
};
