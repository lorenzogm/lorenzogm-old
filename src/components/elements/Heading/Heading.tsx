import { Typography } from '@mui/material'
import { ReactElement } from 'react'

export type HeadingProps = {
  children: string
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ children, component, variant }: HeadingProps): ReactElement {
  return (
    <Typography component={component || variant} variant={variant}>
      {children}
    </Typography>
  )
}
