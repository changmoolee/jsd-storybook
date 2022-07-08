import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  a11y: {
    config: {
      rules: [
        {
          id: "color-contrast",
          enabled: false,
        },
      ],
    },
  },
};

const layout = {
  display: "flex",
  justifyContent: "center",
};

export const decorators = [
  (Story) => (
    <div style={layout}>
      <Story />
    </div>
  ),
];

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });
