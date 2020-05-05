import { Text } from '@taimoormk/react-native-commons-collection/text';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileWrapper, ProfileHeading } from './styled';
import { fetchProfileData } from './actions';
import { profileScreenText } from './helpers';
import { getUserDataFromState } from './selectors';

export const Profile = () => {
  // dispatch
  const dispatch = useDispatch();

  // selector
  const userData = useSelector(getUserDataFromState);

  const fetchData = () => (
    dispatch(fetchProfileData('taimoormk'))
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProfileWrapper>
      <ProfileHeading>
        {profileScreenText.mainHeading}
      </ProfileHeading>
      {userData && (
        <Fragment>
          <Text>{userData.name}</Text>
          <Text>{userData.bio}</Text>
          <Text>{userData.company}</Text>
        </Fragment>
      )}
    </ProfileWrapper>
  );
};
