import React, { useState } from 'react';
import styled from 'styled-components';
import SocialItem from './SocialItem';

const StyledSocialContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface socialState {
  type: string;
  url: string;
}

function Social() {
  let [socials] = useState<socialState[]>([{ type: 'github', url: 'https://github.com/DoGeol' }]);

  return (
    <StyledSocialContainer>
      {
        socials.map((social, idx) => {
          return <SocialItem social={social} key={idx} />;
        })
      }
    </StyledSocialContainer>
  );
}

export default Social;