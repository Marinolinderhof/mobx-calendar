import styled, { css } from 'styled-components';
import { mediaq } from 'myconstants';

const Wrapper = styled.div`
  flex: 1 0 auto;
  padding: 0 8px;

  display: flex;
  flex-flow: column nowrap;
  position: relative;
  ${mediaq.gtMedium(css`
    max-width: 750px;
    margin-bottom: 50px;
  `)};
`;

export default Wrapper;
