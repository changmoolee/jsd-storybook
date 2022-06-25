import React from "react";
import SkeletonUIDemo from "./SkeletonUIDemo";

export default {
  title: "Feature/SkeletonUI",
  component: SkeletonUIDemo,
  argsTypes: {},
  parameters: {
    componentSubtitle: "SkeletonUI",
  },
};

const Template = (args) => <SkeletonUIDemo {...args} />;

export const Rectangle = Template.bind({});

Rectangle.args = {
  children: <div style={{ width: "200px", height: "50px" }} />,
};

export const Circle = Template.bind({});

Circle.args = {
  children: (
    <div style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
  ),
};
