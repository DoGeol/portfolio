import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useMainNav from './useMainNav';

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
  },
  isHome: boolean
}

function IconCard(props: IconCardProps) {
  const isTarget: boolean = props.mainNavInfo.type === 'newWindow';
  const target: string = isTarget ? '_blank' : '';
  const history = useHistory();
  const { onSelected } = useMainNav();
  let homeClick = () => {
    if (props.isHome) {
      onSelected(null);
      history.push(`/portfolio`);
    }
  };
  return (
    <>
      {
        isTarget ?
          <a href={props.mainNavInfo.url} target={target} title={props.mainNavInfo.name}>
            <StyledIconCard className={`${props.mainNavInfo.faClass}`} />
          </a>
          :
          <StyledIconCard className={`${props.mainNavInfo.faClass}`} onClick={homeClick} />
      }
    </>
  );
}

export default IconCard;