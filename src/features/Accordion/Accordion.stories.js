import Accordion from "./Accordion";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Feature/Accordion",
  component: Accordion,
  argTypes: {
    open: {
      name: "open",
      table: {
        type: {
          name: "boolean",
        },
        disable: true,
      },
      defaultValue: false,
    },
    title: {
      name: "title",
      description: "Specify the title of the Accordion.",
      type: { required: false },
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      name: "children",
      description:
        "Pass in the children that will be rendered within the Accordion",
      table: {
        type: {
          summary: "node",
        },
      },
      control: {
        type: null,
      },
    },
    handleAccordion: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => {
  const [{ open }, setOpen] = useArgs();

  const handleAccordion = () => {
    setOpen({ open: !open });
  };

  const stateArgs = {
    open,
    handleAccordion,
  };

  return <Accordion {...stateArgs} {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  title: "title is here.",
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  ),
};
