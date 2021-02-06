// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

// ########## Import Components Here ##########
import { AppNavigation } from '../../navigation';
import { showAppAction } from '../../redux/actions';
import { getShowApp } from '../../redux/selectors';
import { SignIn } from '../sign-in';

export const MainScreen = () => {
  // selector
  const showApp = useSelector(getShowApp);

  return (
    <Fragment>
      {showApp ? <AppNavigation /> : <SignIn showAppAction={showAppAction} />}
    </Fragment>
  );
};
