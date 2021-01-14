import React from 'react';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from {
    width: 0
  }
  to {
    width: 100%
  }
`;

const blinkCaret = keyframes`
  from, to {
    border-color: transparent
  }
  50% {
    border-color: orange;
  }
`;

const TypingArea = styled.p<any>`
  color: ${props => props.textColor};
  overflow: hidden;
  display: inline-block;
  border-right: .15em solid orange;
  width: auto;
  white-space: nowrap;
  letter-spacing: .15em;
  animation: ${typing} 2.5s steps(40, end),
  ${blinkCaret} .75s step-end infinite;
`;

const StaticArea = styled.p`

`;

interface TypingTextProps {
  isTyping: boolean;
  mainText: string;
  textColor: string;
}

function TypingText(props: TypingTextProps) {
  return (
    <>
      {
        props.isTyping
          ? <TypingArea>{props.mainText}</TypingArea>
          : <StaticArea>{props.mainText}</StaticArea>
      }
    </>
  );
}

export default TypingText;