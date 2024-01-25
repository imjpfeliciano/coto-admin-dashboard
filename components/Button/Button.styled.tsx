import { css } from 'styled-components'
import theme from '../../utils/theme'

export const BaseButton = css`
  height: 32px; // TODO: Check all buttons have the same height
  border-radius: 5px; // TODO: Check all buttons have the same border radius
  padding: 0 1rem;
  background-color: ${theme.colors.bgColor};
  color: ${theme.colors.accent};
  border: 0;
  font-weight: bold;

  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.white};

    .material-icons {
      color: ${theme.colors.white};
    }
  }
`
