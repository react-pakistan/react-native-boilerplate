// ########## Import Dependencies Here ##########
import { Button } from '@react-pakistan/react-native-commons-collection';
import { Spacer } from '@react-pakistan/react-native-commons-collection/spacer';
import { theme as defaultTheme } from '@react-pakistan/util-react-native-functions';
import { object } from 'prop-types';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { withTheme } from 'styled-components';

// ########## Import Components Here ##########
import { showAppAction } from '../../redux/actions';
import { loginScreenText } from './helpers';
import {
  OAuthHeading,
  SignInWrapper,
} from './styled';

export const SignIn = memo(withTheme(({
  theme,
}) => {
  // dispatch
  const dispatch = useDispatch();

  const onPressHandler = () => dispatch(showAppAction());

  return (
    <SignInWrapper>
      <OAuthHeading>
        {loginScreenText.oAuthHeading}
      </OAuthHeading>
      <Spacer margin={theme.spacing.default} />
      <Button
        onPress={onPressHandler}
        title={loginScreenText.facebookButton}
      />
      <Spacer margin={theme.spacing.default} />
      <Button
        onPress={onPressHandler}
        title={loginScreenText.googleButton}
      />
    </SignInWrapper>
  );
}));

SignIn.propTypes = {
  theme: object,
};
SignIn.defaultProps = {
  theme: defaultTheme,
};
