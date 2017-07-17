import styled from 'styled-components';
import { colors } from 'myconstants';

const AppointmentCard = styled.div`
  background-color: ${colors.appointmentCard};
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  top: ${({ top = 0 }) => `${top}px`};
  left: ${({ offset = 0 }) => `${offset}%`};
  height: ${({ height = 0 }) => `${height}px`};
  width: ${({ width = 100 }) => `calc(${width}% - 5px)`};
  overflow: hidden;
`;

export default AppointmentCard;
