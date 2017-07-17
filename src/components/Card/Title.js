import styled from 'styled-components';
import { rem } from 'polished';
import { colors } from 'myconstants';

const Title = styled.h2`
  margin: 0;
  color: ${colors.text};
  padding: ${rem('16px')} ${rem('32px')};
  font-size: ${rem('19px')};
  font-weight: 400;
  border-bottom: 1px solid ${colors.border};
  -webkit-font-smoothing: antialiased;
`;

export default Title;
