import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { showAppAction } from './actions';
import {
  getShowApp,
} from './selectors';
import { SignIn } from '../sign-in';
import { AppRouter } from '../../globals/router';

export const MainScreen = () => {
  // selector
  const showApp = useSelector(getShowApp);

  return (
    <Fragment>
      {showApp ? <AppRouter /> : <SignIn showAppAction={showAppAction} />}
    </Fragment>
  );
};
