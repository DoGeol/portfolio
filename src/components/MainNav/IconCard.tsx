import React from 'react';
import styled from 'styled-components';

const StyledIconCard = styled.i`
  color: #9599a0;
  font-size: 20px;
  padding: 15px;
  cursor: pointer;
  transition: color 100ms ease;
  margin-bottom: 10px;

  &:hover {
    color: hsl(218.20000000000005, 5.5%, 72.7%);
  }
;

  @media screen and ${props => props.theme.mobile} {
    margin-bottom: 0;
  }
`;

interface IconCardProps {
  faType: string;
}

function IconCard(props: IconCardProps) {
  return (
    <StyledIconCard className={`fas ${props.faType}`} />
  );
}

export default IconCard;