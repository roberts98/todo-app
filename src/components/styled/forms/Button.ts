import styled from 'styled-components';
import { Colors } from '../../../contants/colors';

export const Button = styled.button`
  background-color: ${Colors.primary};
  color: ${Colors.white};
  min-width: 200px;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.4s;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    border: 2px solid ${Colors.primary};
    color: ${Colors.primary};
    background-color: ${Colors.white};
  }
`;
