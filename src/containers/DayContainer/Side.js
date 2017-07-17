import styled, { css } from 'styled-components';
import { mediaq } from 'myconstants';

const Side = styled.aside`
  background: #f8f8f8;
  padding: 20px;
  border-radius: 5px;
  margin-top: 8px;
  overflow-x: hidden;
  overflow-y: auto;

  ${mediaq.gtMedium(css`
    border-radius: 0 5px 5px 0;
    margin: 20px 0; 
    box-shadow: inset 10px 0px 10px 0px rgba(0,0,0,0.1);
  `)};
`;

export default Side;
