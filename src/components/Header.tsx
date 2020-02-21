import React from 'react';
import styled from 'styled-components';

import { Colors } from '../contants/colors';

export function Header() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const dayName = date.toLocaleDateString('default', { weekday: 'long' });
  return (
    <Wrapper>
      <Left>
        <Day>{day}</Day>
        <div>
          <Month>{month}</Month>
          <p>{year}</p>
        </div>
      </Left>
      <DayName>{dayName}</DayName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${Colors.dark};
  margin-bottom: 40px;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Day = styled.span`
  font-size: 40px;
  margin-right: 4px;
`;

const Month = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;

const DayName = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;
