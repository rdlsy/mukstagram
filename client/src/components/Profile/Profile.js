import React from 'react';
import { Container } from '../../styles/custom';
import { ProfileWrap, Img, Introduce, Text } from './style';
// import ItemBlock from '../../styles/components/Item';

export default function Profile({ user }) {
  return (
    <Container mypage>
      <ProfileWrap>
        <div className="Wrap">
          <Img>
            <div>
              <img src={user.image} alt="" />
            </div>
          </Img>
          <Introduce>
            <Text userId>{user.name}</Text>
            <Text email>{user.email}</Text>
            <Text description></Text>
          </Introduce>
        </div>
        <Text m_description>안녕하세용!!!</Text>
      </ProfileWrap>
      {/* <ItemBlock text="프로필 편집" /> */}
    </Container>
  );
}