import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { TopContentComponent } from './top-content.component';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  component: TopContentComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      imports: [RouterTestingModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(TopContentComponent, (args) => ({
      map: '',
      title: '',
    })),
  ],
  title: 'Top Content',
  excludeStories: /.*Data$/,
  args: {
    map: {
      title: 'Some -> Current',
      link: '#',
    },
    title: 'Title',
  },
  parameters: {
    docs: {
      description: {
        component:
          'The component is displaying the top header includes a breadcrumb link, a title and a child element',
      },
    },
  },
  argTypes: {
    content: {
      description: 'ng-content, you can put any valid html or component',
    },
    map: {
      description: 'breadcrumb',
    },
  },
} as Meta;

const Template: Story = (args) => ({
  template: `<div [innerHTML] ="content"></div>`,
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  map: {
    title: 'Some -> Current',
    link: '#',
  },
  title: 'Title',
  content: '<h5>This is the help <a href="#" title="link">link</a> </h5>',
};
