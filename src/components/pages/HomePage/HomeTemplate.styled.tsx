import styled from '@emotion/styled'

const Hero = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  margin: ${theme.spacing(8, 0)}
`,
)

const Categories = styled.div(
  `
  display: flex;
  justify-content: space-between;
  `,
)

export const Styled = {
  Categories,
  Hero,
}
