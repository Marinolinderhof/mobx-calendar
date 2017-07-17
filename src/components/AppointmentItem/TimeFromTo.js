import styled from 'styled-components';
import { colors } from 'myconstants';
import { rem, opacify } from 'polished';

const Header = styled.div`
  color: ${opacify(-0.3, colors.appointmentText)};
  font-size: ${rem('14px')};
  font-weight: 400;
`;

export default Header;
