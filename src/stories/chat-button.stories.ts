import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
 
import { ChatButtonComponent } from '../app/chat/chat-button/chat-button/chat-button.component';
import { last } from 'rxjs';
 
//👇 This default export determines where your story goes in the story list
const meta: Meta<ChatButtonComponent> = {
  component: ChatButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
        imports: [ChatButtonComponent],
    }),
  ],
  argTypes: {
    // Por ejemplo, si tu botón tiene una propiedad disabled:
    // disabled: { control: 'boolean' },
  },
};
 
export default meta;
type Story = StoryObj<ChatButtonComponent>;
 
export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
  // Si necesitas renderizar algo específico:
  render: (args) => ({
    props: args,
    template: '<app-chat-button></app-chat-button>'
  })
};

// Puedes tener múltiples stories para diferentes estados
export const Disabled: Story = {
    args: {
      // disabled: true
    },
  };