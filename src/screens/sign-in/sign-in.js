// ########## Import Dependencies Here ##########
import { Button } from '@taimoormk/react-native-commons-collection/button';
import { Spacer } from '@taimoormk/react-native-commons-collection/spacer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { func } from 'prop-types';

// ########## Import Components Here ##########
import { loginScreenText } from './helpers';
import {
  OAuthHeading,
  SignInWrapper,
} from './styled';

export const SignIn = ({
  showAppAction,
}) => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <SignInWrapper>
      <OAuthHeading>
        {loginScreenText.oAuthHeading}
      </OAuthHeading>
      <Spacer margin={2} />
      <Button
        onPress={() => dispatch(showAppAction())}
        title={loginScreenText.facebookButton}
      />
      <Spacer margin={2} />
      <Button
        onPress={() => dispatch(showAppAction())}
        title={loginScreenText.googleButton}
      />
    </SignInWrapper>
  );
};

SignIn.propTypes = {
  showAppAction: func,
};
