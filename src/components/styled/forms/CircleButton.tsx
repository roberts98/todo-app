import styled from 'styled-components';

import { Colors } from '../../../contants/colors';
import plus from '../../../assets/plus.svg';

export const CircleButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${Colors.primary};
  position: relative;
  border: unset;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;
