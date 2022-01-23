import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './Header.stories'

const { Default } = composeStories(stories)

test('Header', () => {
  render(<Default />)

  expect(screen.getByRole('link', { name: 'lorenzogm.com' })).toBeInTheDocument()

  expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Coding Practices' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Project Setup' })).toBeInTheDocument()

  expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()

  // small viewports
  expect(screen.getByRole('button', { name: 'Open main menu' })).toBeInTheDocument()
})
