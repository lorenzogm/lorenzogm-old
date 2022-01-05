/* eslint-disable jest/expect-expect */
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './Button.stories'

const { Contained, Outlined } = composeStories(stories)

test('Button: Contained', () => {
  render(<Contained />)

  screen.getAllByRole('button', { name: 'Contained' })
})

test('Button: Outlined', () => {
  render(<Outlined />)

  screen.getAllByRole('button', { name: 'Outlined' })
})
