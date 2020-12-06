// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

// ########## Import Components Here ##########
import { AppRouter } from '../../globals/router';
import { SignIn } from '../sign-in';
import { showAppAction } from '../../redux/actions';
import {
  getShowApp,
} from '../../redux/selectors';

export const MainScreen = () => {
  // selector
  const showApp = useSelector(getShowApp);

  return (
    <Fragment>
      {showApp ? <AppRouter /> : <SignIn showAppAction={showAppAction} />}
    </Fragment>
  );
};