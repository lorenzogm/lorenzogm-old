import type { GridProps as GridMuiProps } from '@mui/material'
import GridMui from '@mui/material/Grid'

export type GridColumnProps = Pick<GridMuiProps, 'children' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>

export function GridColumn(props: GridColumnProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <GridMui item {...props} />
}
