import React from 'react';
import styled from 'styled-components';
import pic from '../../../assets/images/profile01.png';

const Item = styled.div`
  display: flex;
  justify-content: left;
  align-items: baseline;
  margin-bottom: 10px;

  p {
    display: inline-block;
    margin-left: 10px;
  }

  a > p {
    &:hover {
      color: greenyellow;
      text-decoration: underline;
    }
  }
`;

const Contact = styled.div`
  color: whitesmoke;
  font-size: 18px;
`;

const Name = styled.h1`
  color: whitesmoke;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 10px;
  margin-bottom: 10px;
  @media screen and ${props => props.theme.viewport.mobile} {
    text-align: center;
  }
`;
const Infomation = styled.div`
  padding: 15px;
  width: 100%;
`;

const Picture = styled.img`
  padding: 15px;
  width: 200px;
  border: none;
  border-radius: 20px;
  overflow: hidden;
`;

const FlexColumns = styled.div<any>`
  display: flex;
  flex: ${(props) => props.flexRate} 1;
  justify-content: ${props => props.align};
  align-items: ${props => props.align};
  @media screen and ${props => props.theme.viewport.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 5px;

  @media screen and ${props => props.theme.viewport.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function Profile() {
  return (
    <ProfileWrapper>
      <FlexColumns flexRate={`25%`} align={'center'}>
        <Picture src={pic} alt='Profile Image' />
      </FlexColumns>
      <FlexColumns flexRate={`75%`}>
        <Infomation>
          <Name>편도걸</Name>
          <Contact>
            <Item>
              <i className='fas fa-envelope' />
              <a href='mailto:pdg2491@naver.com' title='send to mail' target='_blank'><p>pdg2491@naver.com</p></a>
            </Item>
            <Item>
              <i className='fas fa-phone-alt' />
              <p>Please contact me by email</p>
            </Item>
            <Item>
              <i className='fab fa-github' />
              <a href='https://github.com/DoGeol' title='move to github' target='_blank'>
                <p>https://github.com/DoGeol</p></a>
            </Item>
          </Contact>
        </Infomation>
      </FlexColumns>
    </ProfileWrapper>
  );
}

export default Profile;