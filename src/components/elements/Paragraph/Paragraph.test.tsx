import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

import * as stories from './Paragraph.stories'

const { Body1 } = composeStories(stories)

test('Body1', () => {
  render(<Body1 />)

  screen.getByText('Body1')
})
