/* eslint-disable */

import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getShowOnboarding } from '../redux/selectors';
import { MainScreen } from '../screens/main-screen';
import { OnBoarding } from '../screens/on-boarding';

export const MainNavigation = () : ReactElement => {
  // selectors
  const showOnboarding = useSelector(getShowOnboarding);

  return (
    <>
      {showOnboarding ? <OnBoarding /> : <MainScreen />}
    </>
  );
};
