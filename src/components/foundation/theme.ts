import { createTheme, Theme as ThemeMUI } from '@mui/material/styles'

import { withComponents } from './withComponents'

export const theme = createTheme()

withComponents(theme)

import '@emotion/react'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeMUI {}
}
