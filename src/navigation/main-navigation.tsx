import React, { Fragment, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getHideIntro } from '../redux/selectors';
import { MainScreen } from '../screens/main-screen';
import { OnBoarding } from '../screens/on-boarding';

export const MainNavigation = () : ReactElement => {
  // selectors
  const hideIntro = useSelector(getHideIntro);

  return (
    <Fragment>
      {hideIntro ? <OnBoarding /> : <MainScreen />}
    </Fragment>
  );
};
