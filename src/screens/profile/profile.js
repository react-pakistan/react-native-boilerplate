// ########## Import Dependencies Here ##########
import { ActivityIndicator, Text } from '@react-pakistan/react-native-commons-collection';
import React, { Fragment, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from 'styled-components';

// ########## Import Components Here ##########
import { fetchProfileData } from '../../redux/actions';
import { getUserDataFromState, getUserIsLoadingFromState } from '../../redux/selectors';
import { profileScreenText } from './helpers';
import { Avatar, ProfileHeading, ProfileWrapper } from './styled';

export const Profile = memo(withTheme(({
  theme,
}) => {
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
      <ProfileHeading
        {...theme.typography.h2}
      >
        {profileScreenText.mainHeading}
      </ProfileHeading>
      {isLoading && <ActivityIndicator />}
      {userData && (
        <Fragment>
          <Avatar source={{ uri: userData.avatar_url }} />
          <Text
            {...theme.typography.text}
          >
            {userData.name}
          </Text>
          <Text
            {...theme.typography.text}
          >{userData.bio}
          </Text>
          <Text
            {...theme.typography.text}
          >
            {userData.company}
          </Text>
        </Fragment>
      )}
    </ProfileWrapper>
  );
}));
