import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Paragraph } from './Paragraph'

export default {
  title: 'Elements/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Body1 = Template.bind({})
Body1.args = {
  children: 'Body1',
}
