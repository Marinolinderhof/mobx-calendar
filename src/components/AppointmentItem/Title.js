import styled from 'styled-components';
import { colors } from 'myconstants';
import { rem } from 'polished';

const Title = styled.h2`
  color: ${colors.appointmentText};
  font-size: ${rem('14px')};
  font-weight: 600;
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Title;
