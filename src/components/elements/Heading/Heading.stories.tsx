import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Heading } from './Heading'

export default {
  title: 'Elements/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Heading1 = Template.bind({})
Heading1.args = {
  children: 'Heading1',
  variant: 'h1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  children: 'Heading2',
  variant: 'h2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  children: 'Heading3',
  variant: 'h3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  children: 'Heading4',
  variant: 'h4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  children: 'Heading5',
  variant: 'h5',
}

export const Heading6 = Template.bind({})
Heading6.args = {
  children: 'Heading6',
  variant: 'h6',
}
