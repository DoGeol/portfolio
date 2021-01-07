import React from 'react';
import styled from 'styled-components';

const StyledIconCard = styled.i`
  color: #b5b5b5;
  font-size: 20px;
  padding: 15px;
  cursor: pointer;
  transition: color 100ms ease;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
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