import React, { Fragment, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppNavigation } from '../../navigation';
import { getShowApp } from '../../redux/selectors';
import { SignIn } from '../sign-in';

export const MainScreen = () : ReactElement => {
  // selector
  const showApp = useSelector(getShowApp);

  return (
    <Fragment>
      {showApp ? <AppNavigation /> : <SignIn />}
    </Fragment>
  );
};
