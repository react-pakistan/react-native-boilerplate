import React from 'react';
import { useDispatch } from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';
import { onBoardingData } from './helpers';
import { hideIntroAction } from '../main-screen/actions';
import { Next, Skip } from './components';

export const OnBoarding = () => {
  const dispatch = useDispatch();

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onDone={() => dispatch(hideIntroAction())}
      onSkip={() => dispatch(hideIntroAction())}
      pages={onBoardingData}
    />
  );
};
