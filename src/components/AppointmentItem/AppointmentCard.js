import styled, { keyframes } from 'styled-components';
import { colors } from 'myconstants';

const comeInScreen = keyframes`
	from {
    transform: scaleX(0);
    height:0;
	}

	to {
	  transform:scaleX(1) ;
	}
`;

const AppointmentCard = styled.div`
  background-color: ${colors.appointmentCard};
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  top: ${({ top = 0 }) => `${top}px`};

  animation: ${comeInScreen} 1s ease 0s 1;

  left: ${({ offset = 0 }) => `${offset}%`};
  height: ${({ height = 0 }) => `${height}px`};
  width: ${({ width = 100 }) => `calc(${width}% - 5px)`};
  overflow: hidden;
`;

export default AppointmentCard;
