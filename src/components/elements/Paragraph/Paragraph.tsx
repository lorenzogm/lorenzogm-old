import { Typography } from '@mui/material'
import { ReactElement } from 'react'

export type ParagraphProps = {
  children: string
}

export function Paragraph({ children }: ParagraphProps): ReactElement {
  return <Typography variant="body1">{children}</Typography>
}
