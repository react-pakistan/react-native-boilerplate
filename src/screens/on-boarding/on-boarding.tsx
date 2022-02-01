import { IEmptyAction } from '@react-pakistan/util-functions/action-creator-factories';
import React, { ReactElement } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useDispatch } from 'react-redux';
import { showOnboarding } from '../../redux/slices/main-slice';
import { TYPES } from '../../redux/constants';
import { Next, Skip } from './components';
import { onBoardingData } from './helpers';

export const OnBoarding = () : ReactElement => {
  // dispatch
  const dispatch = useDispatch();

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      onDone={() : IEmptyAction<TYPES.SHOW_ONBOARDING> => dispatch(showOnboarding())}
      onSkip={() : IEmptyAction<TYPES.SHOW_ONBOARDING> => dispatch(showOnboarding())}
      pages={onBoardingData}
    />
  );
};
