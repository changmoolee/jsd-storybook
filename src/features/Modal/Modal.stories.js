import React from "react";
import { useArgs } from "@storybook/client-api";
import ModalDemo from "./ModalDemo";

export default {
  title: "Feature/Modal",
  component: ModalDemo,
  argTypes: {},
  parameters: {
    componentSubtitle: "Modal",
  },
  // argTypes: { open: true },
};

const Template = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const closeModal = () => {
    updateArgs({ open: false });
  };

  const stateArgs = {
    closeModal,
  };
  return <ModalDemo {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  width: 400,
  height: 300,
  title: "Modal title is here.",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosamfacere vitae quis aperiam laudantium, nisi sequi a quaerat veniamvoluptatibus, dolorum ipsam commodi. Unde impedit dolorem reiciendisducimus inventore facilis.",
  open: true,
};
