import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from 'myconstants';

const Hour = styled.div`
  width: 40px;
  margin-top: -8px;
  padding-right: 3px;
  text-align: right;
  font-size: ${rem('12px')};
  color: ${colors.border};
`;

export default Hour;
