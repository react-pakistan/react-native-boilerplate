import { Button, Spacer } from '@react-pakistan/react-native-commons-collection';
import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { showApp } from '../../redux/slices/main-slice';
import { loginScreenText } from './helpers';
import {
  OAuthHeading,
  SignInWrapper,
} from './styled';

export const SignIn = () : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  // theme
  const theme = useTheme();

  // callbacks
  const onPressHandler = useCallback(() : void => {
    dispatch(showApp());
  }, [dispatch]);

  return (
    <SignInWrapper>
      <OAuthHeading>
        {loginScreenText.oAuthHeading}
      </OAuthHeading>
      <Spacer marginVertical={theme.spacing.xsmall} />
      <Button
        onPress={onPressHandler}
        title={loginScreenText.facebookButton}
      />
      <Spacer marginVertical={theme.spacing.xsmall} />
      <Button
        onPress={onPressHandler}
        title={loginScreenText.googleButton}
      />
    </SignInWrapper>
  );
};
