// ########## Import Dependencies Here ##########
import { Spacer } from '@taimoormk/react-native-commons-collection/spacer';
import React from 'react';
import { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';

// ########## Import Components Here ##########
import { STYLE_CONSTANTS } from '../../globals/styles';
import { styles } from './styles';
import { loginScreenText } from './helpers';
import { SignInWrapper, OAuthHeading } from './styled';

export const SignIn = ({
  showAppAction,
}) => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <SignInWrapper>
      <OAuthHeading style={styles.oAuthHeading}>
        {loginScreenText.oAuthHeading}
      </OAuthHeading>
      <Spacer />
      <Button
        icon={require('../../assets/images/facebook.png')}
        mode="contained"
        color={STYLE_CONSTANTS.COLORS.FACEBOOK}
        style={styles.facebookButton}
        onPress={() => dispatch(showAppAction())}
      >
        {loginScreenText.facebookButton}
      </Button>
      <Spacer />
      <Button
        icon={require('../../assets/images/google.png')}
        mode="contained"
        color={STYLE_CONSTANTS.COLORS.GOOGLE}
        style={styles.googleButton}
        onPress={() => dispatch(showAppAction())}
      >
        {loginScreenText.googleButton}
      </Button>
    </SignInWrapper>
  );
};

SignIn.propTypes = {
  showAppAction: func,
};
