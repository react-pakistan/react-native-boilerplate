import { ActivityIndicator, Text } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import React, { Fragment, ReactElement, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withTheme } from 'styled-components/native';
import { fetchProfileData } from '../../redux/actions';
import { getUserDataFromState, getUserIsLoadingFromState } from '../../redux/selectors';
import { profileScreenText } from './helpers';
import { Avatar, ProfileHeading, ProfileWrapper } from './styled';

export const Profile = memo(withTheme(({
  theme,
} : IProfileProps) : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  // callbacks
  const fetchData = useCallback(() : void => {
    dispatch(fetchProfileData('taimoormk'));
  }, []);

  // selectors
  const isLoading = useSelector(getUserIsLoadingFromState);
  const userData = useSelector(getUserDataFromState);

  // effect
  useEffect(() : void => {
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
          <Avatar
            source={{ uri: userData.avatar_url }}
            height={theme.spacing.default*3}
            width={theme.spacing.default*3}
          />
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

export interface IProfileProps {
  /**
   *
   */
  theme : IRNTheme;
}
