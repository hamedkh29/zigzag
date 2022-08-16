import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { BoxComponent } from './box.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export default {
  component: BoxComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      imports: [NgxSkeletonLoaderModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],

  title: 'CoBox',
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  type: 'Auto',
  icon: '/assets/icons/car-icon-2.svg',
  weight: 2.032,
};

export const Primary = Template.bind({});
Primary.args = {
  isLoading: false,
  color: 'primary',
  type: 'Auto',
  icon: '/assets/icons/vvs-logo.svg',
  weight: 758,
};
export const Loading = Template.bind({});
