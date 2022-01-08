import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

export default {
  title: 'Elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Contained = Template.bind({})
Contained.args = {
  children: 'Contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
}
