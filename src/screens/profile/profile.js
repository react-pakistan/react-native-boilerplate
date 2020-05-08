import { ActivityIndicator } from '@taimoormk/react-native-commons-collection/activity-indicator';
import { Text } from '@taimoormk/react-native-commons-collection/text';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileWrapper, ProfileHeading } from './styled';
import { fetchProfileData } from './actions';
import { profileScreenText } from './helpers';
import { getUserDataFromState, getUserIsLoadingFromState } from './selectors';

export const Profile = () => {
  // dispatch
  const dispatch = useDispatch();

  // selector
  const isLoading = useSelector(getUserIsLoadingFromState);
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
      {isLoading && <ActivityIndicator />}
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
