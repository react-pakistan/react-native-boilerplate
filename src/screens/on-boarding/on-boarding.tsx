import React, { Dispatch, ReactElement } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useDispatch } from 'react-redux';
import { showOnboarding } from '../../redux/slices/main-slice';
import { Next, Skip } from './components';
import { onBoardingData } from './helpers';

export const OnBoarding = () : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onDone={() => dispatch(showOnboarding())}
      onSkip={() => dispatch(showOnboarding())}
      pages={onBoardingData}
    />
  );
};
