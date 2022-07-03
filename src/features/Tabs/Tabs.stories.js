import React from "react";
import { useArgs } from "@storybook/client-api";
import { Tabs, TabList, Tab, TabsDescriptions, TabsDescription } from "./Tabs";

export default {
  title: "Feature/Tabs",
  component: Tabs,
  argTypes: {
    clicked: {
      name: "clicked",
      type: { name: "number", required: true },
      defaultValue: 0,
      control: {
        type: null,
      },
    },
    children: {
      name: "children",
      control: {
        type: null,
      },
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

  return <Tabs {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

const style = {
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const example = (
  <Tabs>
    <TabList>
      <Tab>child1</Tab>
      <Tab>child2</Tab>
      <Tab>child3</Tab>
      <Tab>child4</Tab>
    </TabList>
    <TabsDescriptions>
      <TabsDescription>
        <div style={style}>child1</div>
      </TabsDescription>
      <TabsDescription>
        <div style={style}>child2</div>
      </TabsDescription>
      <TabsDescription>
        <div style={style}>child3</div>
      </TabsDescription>
      <TabsDescription>
        <div style={style}>child4</div>
      </TabsDescription>
    </TabsDescriptions>
  </Tabs>
);

Primary.args = {
  width: 600,
  height: 50,
  children: example,
};
