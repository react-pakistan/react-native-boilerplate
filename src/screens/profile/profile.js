// ########## Import Dependencies Here ##########
import { ActivityIndicator, Text } from '@react-pakistan/react-native-commons-collection';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ########## Import Components Here ##########
import { fetchProfileData } from '../../redux/actions';
import { getUserDataFromState, getUserIsLoadingFromState } from '../../redux/selectors';
import { profileScreenText } from './helpers';
import { Avatar, ProfileHeading, ProfileWrapper } from './styled';

export const Profile = () => {
  // dispatch
  const dispatch = useDispatch();

  // selector
  const isLoading = useSelector(getUserIsLoadingFromState);
  const userData = useSelector(getUserDataFromState);

  const fetchData = () => {
    dispatch(fetchProfileData('taimoormk'));
  };

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
          <Avatar source={{ uri: userData.avatar_url }} />
          <Text>{userData.name}</Text>
          <Text>{userData.bio}</Text>
          <Text>{userData.company}</Text>
        </Fragment>
      )}
    </ProfileWrapper>
  );
};
