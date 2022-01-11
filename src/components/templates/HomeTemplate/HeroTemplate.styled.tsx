import styled from '@emotion/styled'

const Hero = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  margin: ${theme.spacing(8, 0)}
`,
)

const styles = {
  Hero,
}

export default styles
