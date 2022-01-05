import type { GridProps as GridMuiProps } from '@mui/material'
import GridMui from '@mui/material/Grid'

type GridRowProps = Pick<GridMuiProps, 'children'>

export function GridRow({ ...props }: GridRowProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <GridMui container {...props} />
}
