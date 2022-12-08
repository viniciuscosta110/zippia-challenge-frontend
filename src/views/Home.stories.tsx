import { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';

export default{
  title: 'views/Home',
  component: Home,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FFF' }}>
        <Story />
      </div>
    ),
  ]
} as Meta;

export const Default: StoryObj = {}