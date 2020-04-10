import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { MainScreen } from './src/screens/main-screen';
import { OnBoarding } from './src/screens/on-boarding';
import { getHideIntro } from './src/screens/main-screen/selectors';

export const App = () => {
  const hideIntro = useSelector(getHideIntro);

  return (
    <Fragment>
      {hideIntro ? <OnBoarding /> : <MainScreen />}
    </Fragment>
  );
};
