import { Button as ButtonMui, ButtonProps as ButtonMuiProps } from '@mui/material'

export type ButtonProps = Pick<ButtonMuiProps, 'children' | 'disabled' | 'onClick'> & {
  color?: 'secondary'
  size?: 'small'
  variant?: 'outlined'
}

export function Button({ children, disabled, onClick, size, variant }: ButtonProps): JSX.Element {
  return (
    <ButtonMui disabled={disabled} onClick={onClick} size={size || 'large'} variant={variant || 'contained'}>
      {children}
    </ButtonMui>
  )
}
