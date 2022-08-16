import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

import { SlideBoxComponent } from './slide-box.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { ThemeModule } from '../../../../theme/theme.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  component: SlideBoxComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      imports: [MatCarouselModule, BrowserAnimationsModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],

  title: 'SlideBox',
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  slides: [
    'assets/images/header-slider-image-1.svg',
    'assets/images/header-slider-image-1.svg',
    'assets/images/header-slider-image-1.svg',
  ],
};
