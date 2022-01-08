import { ThemeProvider as MUIThemeProvider } from '@mui/material'
import { ThemeProvider } from 'emotion-theming'

import { theme } from '../src/components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// this decorator makes the theme available for styled-components
// however, it needs to be improved to support multiple themes and switch between them
// an addon is required or we need to create our own decorator
const withThemeProvider = (Story) => {
  return (
    <MUIThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </MUIThemeProvider>
  )
}

export const decorators = [withThemeProvider]
