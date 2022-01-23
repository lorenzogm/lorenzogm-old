import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './HomeTemplate.stories'

const { Default } = composeStories(stories)

test('Header', () => {
  render(<Default />)

  expect(screen.getByText("Hi, I'm Lorenzo")).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'I do stuff with code' })).toBeInTheDocument()

  expect(screen.getByRole('button', { name: 'Read the blog' })).toBeInTheDocument()
})
