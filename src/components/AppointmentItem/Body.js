import styled from 'styled-components';
import { colors } from 'myconstants';
import { rem, opacify } from 'polished';

const Body = styled.div`
  flex: 1 0 100%;
  color: ${opacify(-0.3, colors.appointmentText)};
  font-size: ${rem('12px')};

  &::after {
    height: 8px;
    content: " ";
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background: linear-gradient(
      to bottom,
      ${opacify(-1, colors.appointmentCard)} 0%,
      ${opacify(0, colors.appointmentCard)} 100%
    );
  }
`;

export default Body;
