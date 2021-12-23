/* eslint-disable */

import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppNavigation } from '../../navigation/app-navigation';
import { getShowApp } from '../../redux/selectors';
import { SignIn } from '../sign-in';

export const MainScreen = () : ReactElement => {
  // selector
  const showApp = useSelector(getShowApp);

  return (
    <>
      {showApp ? <AppNavigation /> : <SignIn />}
    </>
  );
};
