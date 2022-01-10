import { Typography } from '@mui/material'
import { ReactElement } from 'react'

export type HeadingProps = {
  children: string
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ children, variant }: HeadingProps): ReactElement {
  return <Typography variant={variant}>{children}</Typography>
}
