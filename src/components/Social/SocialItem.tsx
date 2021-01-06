import React from 'react';
import styled from 'styled-components';

const SytledSocialItem = styled.a`
  font-size: 25px;
  padding: 10px;
`;

interface defaultProps {
  social: {
    type: string;
    url: string;
  };
}

function SocialItem(props: defaultProps) {
  const type: string = props.social.type;
  const url: string = props.social.url;
  return (
    <SytledSocialItem href={url} target='_blank' title='go to github' rel='noreferrer'><i
      className={`fab fa-${type}`} /></SytledSocialItem>
  );
}

export default SocialItem;