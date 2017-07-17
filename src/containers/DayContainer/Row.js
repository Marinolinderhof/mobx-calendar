import styled, { css } from 'styled-components';
import { mediaq } from 'myconstants';

const Row = styled.div`
  display: flex;
  flex-flow: column nowrap;

  ${mediaq.gtMedium(css`
    flex-flow: row nowrap;
  `)};
`;

export default Row;
