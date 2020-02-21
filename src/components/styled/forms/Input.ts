import styled from 'styled-components';

import { Colors } from '../../../contants/colors';

export const Input = styled.input`
  border: 2px solid ${Colors.primary};
  padding: 20px 20px;
  border-radius: 5px;
  color: ${Colors.dark};
  font-size: 18px;
  font-family: 'Lacquer', sans-serif;
  width: 100%;

  &:focus {
    outline: none;
  }

  & + label {
    position: absolute;
    left: 5px;
    top: 10px;
    transition: all 0.4s;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -4px;
  }
`;
