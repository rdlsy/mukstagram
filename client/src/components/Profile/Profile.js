import React from 'react';
import { ProfileWrap, Img, Introduce, Text } from './style';
// import ItemBlock from '../../styles/components/Item';

export default function Profile({ user }) {
  return (
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
          <Text description>{user.name}</Text>
        </Introduce>
      </div>
      <Text m_description>{user.name}</Text>
      {/* <ItemBlock text="프로필 편집" /> */}
    </ProfileWrap>
  );
}