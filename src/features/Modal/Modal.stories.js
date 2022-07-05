import React from "react";
import { useArgs } from "@storybook/client-api";
import Modal from "./Modal";

export default {
  title: "Feature/Modal",
  component: Modal,
  argTypes: {
    open: {
      type: { required: false },
      defaultValue: true,
    },
    title: {
      name: "title",
      type: { name: "string", required: false },
      description: "Specify the title of Modal",
    },
    children: {
      name: "children",
      type: { name: "node", required: false },
      description: "Provide the contents of your Modal",
      table: {
        type: { summary: "node" },
      },
      control: {
        disable: true,
      },
    },
    firstButtonDisabled: {
      name: "firstbuttonDisabled",
      type: { name: "boolean", required: false },
      description:
        "Specify whether the first Button should be disabled, or not",
      defaultValue: false,
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    firstButtonText: {
      name: "firstButtonText",
      type: { name: "string", required: false },
      description: "Specify the text for the primary button.",
    },
    firstButtonOnClick: {
      name: "firstButtonOnClick",
      description:
        "You can handle the function props when clicking first button.",
      type: { required: false },
      table: {
        type: {
          summary: "func",
        },
      },
    },
    secondaryButtonDisabled: {
      name: "secondarybuttonDisabled",
      type: { name: "boolean", required: false },
      description:
        "Specify whether the secondary Button should be disabled, or not",
      defaultValue: false,
      table: {
        type: {
          name: "boolean",
        },
      },
    },
    secondaryButtonText: {
      name: "secondaryButton",
      type: { name: "string", required: false },
      description: "Specify the text for the secondary button.",
    },
    secondaryButtonOnClick: {
      name: "secondaryButtonOnClick",
      description:
        "You can handle the function props when clicking secondary button.",
      type: { required: false },
      table: {
        type: {
          summary: "func",
        },
      },
    },
    closeModal: {
      type: { required: false },
      table: {
        disable: true,
      },
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
  return <Modal {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  title: "Modal title is here",
  children: (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosamfacere
      vitae quis aperiam laudantium, nisi sequi a quaerat veniamvoluptatibus,
      dolorum ipsam commodi. Unde impedit dolorem reiciendisducimus inventore
      facilis
    </p>
  ),
  firstButtonText: "Confirm",
  secondaryButtonText: "Cancel",
};
