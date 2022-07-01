import React from "react";
import { useArgs } from "@storybook/client-api";
import ModalDemo from "./ModalDemo";

export default {
  title: "Feature/Modal",
  component: ModalDemo,
  argTypes: {
    open: {
      title: "open",
      defaultValue: true,
    },
    firstbuttonDisabled: {
      title: "firstbuttonDisabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    firstButtonText: {
      title: "firstButtonText",
      defaultValue: "Confirm",
    },
    firstButtonOnClick: {
      title: "firstButtonOnClick",
      description:
        "You can handle the function props when clicking first button.",
    },
    secondarybuttonDisabled: {
      title: "secondarybuttonDisabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    secondaryButtonText: {
      title: "secondaryButton",
      defaultValue: "Cancel",
    },
    secondaryButtonOnClick: {
      title: "secondaryButtonOnClick",
      description:
        "You can handle the function props when clicking secondary button.",
    },
  },
  parameters: {
    componentSubtitle: "Modal",
  },
};

const Template = (args) => {
  const [{ open }, updateArgs] = useArgs();

  const closeModal = () => {
    updateArgs({ open: false });
  };

  const stateArgs = {
    open,
    closeModal,
  };
  return <ModalDemo {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  width: 500,
  title: "Modal title is here",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosamfacere vitae quis aperiam laudantium, nisi sequi a quaerat veniamvoluptatibus, dolorum ipsam commodi. Unde impedit dolorem reiciendisducimus inventore facilis.",
};
