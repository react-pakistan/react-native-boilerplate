import { Button, Spacer } from '@react-pakistan/react-native-commons-collection';
import { IRNTheme } from '@react-pakistan/util-react-native-functions';
import React, { ReactElement, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { withTheme } from 'styled-components/native';
import { showAppAction } from '../../redux/actions';
import { loginScreenText } from './helpers';
import {
  OAuthHeading,
  SignInWrapper,
} from './styled';

const SignInComp = ({
  theme,
} : ISignInProps) : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  // callbacks
  const onPressHandler = useCallback(() : void => {
    dispatch(showAppAction());
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

export const SignIn = memo(withTheme(SignInComp));

export interface ISignInProps {
  /**
   *
   */
  theme : IRNTheme;
}
