import { ComponentMeta, ComponentStory } from '@storybook/react'

import { HomeTemplate } from './HomeTemplate'

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
} as ComponentMeta<typeof HomeTemplate>

const Template: ComponentStory<typeof HomeTemplate> = () => <HomeTemplate />

export const Default = Template.bind({})
