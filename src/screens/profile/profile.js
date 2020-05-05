import React from 'react';
import { ProfileWrapper, ProfileHeading } from './styled';
import { profileScreenText } from './helpers';

export const Profile = () => (
  <ProfileWrapper>
    <ProfileHeading>
      {profileScreenText.mainHeading}
    </ProfileHeading>
  </ProfileWrapper>
);
