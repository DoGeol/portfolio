import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainNav } from '../../data/portfolio';

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
  mainNavInfo: {
    id: number;
    name: string;
    url: string;
    faClass: string;
    type: string;
  }
}

function IconCard(props: IconCardProps) {
  const isTarget: boolean = props.mainNavInfo.type === 'newWindow';
  const target: string = isTarget ? '_blank' : '';
  return (
    <>
      {
        isTarget ?
          <a href={props.mainNavInfo.url} target={target} title={props.mainNavInfo.name}>
            <StyledIconCard className={`${props.mainNavInfo.faClass}`} />
          </a>
          :
          <Link to={props.mainNavInfo.url} target={target} title={props.mainNavInfo.name}>
            <StyledIconCard className={`${props.mainNavInfo.faClass}`} />
          </Link>
      }
    </>
  );
}

export default IconCard;