import { IEmptyAction } from '@react-pakistan/util-functions/action-creator-factories';
import React, { ReactElement } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useDispatch } from 'react-redux';
import { hideIntroAction } from '../../redux/actions';
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
      onDone={() : IEmptyAction<TYPES.HIDE_INTRO> => dispatch(hideIntroAction())}
      onSkip={() : IEmptyAction<TYPES.HIDE_INTRO> => dispatch(hideIntroAction())}
      pages={onBoardingData}
    />
  );
};
