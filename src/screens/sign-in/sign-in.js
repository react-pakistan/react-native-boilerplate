// ########## Import Dependencies Here ##########
import { Button } from '@react-pakistan/react-native-commons-collection';
import { func } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Spacer,
  OAuthHeading,
  SignInWrapper,
} from './styled';

// ########## Import Components Here ##########
import { loginScreenText } from './helpers';
import { showAppAction } from '../../redux/actions';

export const SignIn = () => {
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
