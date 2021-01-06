import { css } from 'styled-components';

export const clearfix = css`
  &:Before,
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;