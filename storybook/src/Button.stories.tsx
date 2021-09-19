import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, IButton } from '@rckeller/example-react-lib';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    as: {
      control: {
        type: "select",
        options: ["button", "a", "span"]
      }
    },
    href: {
      control: {
        type: 'text',
      },
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IButton> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
