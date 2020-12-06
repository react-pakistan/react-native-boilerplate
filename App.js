// ########## Import Dependencies Here ##########
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

// ########## Import Components Here ##########
import { getHideIntro } from './src/redux/selectors';
import { OnBoarding } from './src/screens/on-boarding';
import { MainScreen } from './src/screens/main-screen';

export const App = () => {
  const hideIntro = useSelector(getHideIntro);

  return (
    <Fragment>
      {hideIntro ? <OnBoarding /> : <MainScreen />}
    </Fragment>
  );
};
