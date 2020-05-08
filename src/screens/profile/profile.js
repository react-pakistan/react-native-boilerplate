// ########## Import Dependencies Here ##########
import { ActivityIndicator } from '@taimoormk/react-native-commons-collection/activity-indicator';
import { Text } from '@taimoormk/react-native-commons-collection/text';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ########## Import Components Here ##########
import { fetchProfileData } from './actions';
import { profileScreenText } from './helpers';
import { getUserDataFromState, getUserIsLoadingFromState } from './selectors';
import { ProfileWrapper, ProfileHeading } from './styled';

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
