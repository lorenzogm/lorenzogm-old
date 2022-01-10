import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './Heading.stories'

const { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } = composeStories(stories)

test('Heading1', () => {
  render(<Heading1 />)

  screen.getByRole('heading', { name: 'Heading1' })
})

test('Heading2', () => {
  render(<Heading2 />)

  screen.getByRole('heading', { name: 'Heading2' })
})

test('Heading3', () => {
  render(<Heading3 />)

  screen.getByRole('heading', { name: 'Heading3' })
})

test('Heading4', () => {
  render(<Heading4 />)

  screen.getByRole('heading', { name: 'Heading4' })
})

test('Heading5', () => {
  render(<Heading5 />)

  screen.getByRole('heading', { name: 'Heading5' })
})

test('Heading6', () => {
  render(<Heading6 />)

  screen.getByRole('heading', { name: 'Heading6' })
})
