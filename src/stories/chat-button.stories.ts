import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ChatButtonComponent } from '../app/chat/chat-button/chat-button/chat-button.component';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ChatButtonComponent> = {
  title: 'Chat/Chat-Button',
  component: ChatButtonComponent,
  tags: ['autodocs'],
  argTypes: {

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ChatButtonComponent>;

export const Primary: Story = {
  args: {
  },
};