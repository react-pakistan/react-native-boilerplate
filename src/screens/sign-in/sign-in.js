// ########## Import Dependencies Here ##########
import { Button } from '@react-pakistan/react-native-commons-collection';
import { Spacer } from '@react-pakistan/react-native-commons-collection/spacer';
import { theme as defaultTheme } from '@react-pakistan/util-react-native-functions';
import { object } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { withTheme } from 'styled-components';
import {
  OAuthHeading,
  SignInWrapper,
} from './styled';

// ########## Import Components Here ##########
import { loginScreenText } from './helpers';
import { showAppAction } from '../../redux/actions';

export const SignIn = withTheme(({
  theme,
}) => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <SignInWrapper>
      <OAuthHeading>
        {loginScreenText.oAuthHeading}
      </OAuthHeading>
      <Spacer margin={theme.spacing.default} />
      <Button
        onPress={() => dispatch(showAppAction())}
        title={loginScreenText.facebookButton}
      />
      <Spacer margin={theme.spacing.default} />
      <Button
        onPress={() => dispatch(showAppAction())}
        title={loginScreenText.googleButton}
      />
    </SignInWrapper>
  );
});

SignIn.propTypes = {
  theme: object,
};
SignIn.defaultProps = {
  theme: defaultTheme,
};
