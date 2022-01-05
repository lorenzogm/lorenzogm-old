import { Theme } from '@mui/material'
import merge from 'lodash.merge'

import { withMuiButton } from './withMuiButton'

export function withComponents(theme: Theme) {
  const components = {
    MuiButton: withMuiButton(theme),
  }

  theme.components = merge(theme.components, components)
}
