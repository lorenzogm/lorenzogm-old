import { Components, Theme } from '@mui/material'

export function withMuiButton(theme: Theme) {
  const MuiButton: Components['MuiButton'] = {
    styleOverrides: {
      containedPrimary: {
        backgroundColor: theme.palette.common.black,
        '&:disabled': {
          backgroundColor: theme.palette.grey[500],
          color: theme.palette.grey[100],
        },
        '&:hover': {
          backgroundColor: theme.palette.grey[700],
        },
      },
      containedSecondary: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        '&:disabled': {
          backgroundColor: theme.palette.grey[100],
          color: theme.palette.common.black,
        },
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
        },
      },
      outlinedPrimary: {
        borderColor: theme.palette.common.black,
        color: theme.palette.common.black,
        '&:disabled': {
          borderColor: theme.palette.grey[300],
          color: theme.palette.grey[300],
        },
        '&:hover': {
          borderColor: theme.palette.common.black,
          backgroundColor: theme.palette.grey[100],
        },
      },
      outlinedSecondary: {
        borderColor: theme.palette.common.white,
        color: theme.palette.common.white,
        '&:disabled': {
          borderColor: theme.palette.grey[100],
          color: theme.palette.grey[100],
        },
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
          borderColor: theme.palette.common.white,
        },
      },
    },
  }

  return MuiButton
}
