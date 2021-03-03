import React from 'react';
import { Image } from 'react-native';
import { Page } from 'react-native-onboarding-swiper';

export const onBoardingData : Array<Page> = [
  {
    backgroundColor: '#00FFF2',
    image: <Image source={require('../../assets/images/illustration.png')} />,
    subtitle: `A generic, Commons library for React Native apps,
      following modern approach by building your project's
      UI in isolation using state of the art Storybook along
      with React Native.`.replace(/[\n\r]+ */g, ' '),
    subTitleStyles: {
      color: 'black',
    },
    title: 'React Native Commons Collection',
    titleStyles: {
      color: 'black',
    },
  },
  {
    backgroundColor: '#FF0074',
    image: <Image source={require('../../assets/images/illustration.png')} />,
    subtitle: `A generic to specific, UI/UX library for React Native apps,
      following modern approach by building your project's
      UI in isolation using state of the art Storybook along
      with React Native.`.replace(/[\n\r]+ */g, ' '),
    subTitleStyles: {
      color: 'black',
    },
    title: 'React Native UI Collection',
    titleStyles: {
      color: 'black',
    },
  },
  {
    backgroundColor: '#FFC200',
    image: <Image source={require('../../assets/images/illustration.png')} />,
    subtitle: `A generic, Icons library for React Native apps,
      following modern approach by building your project's
      UI in isolation using state of the art Storybook along
      with React Native.`.replace(/[\n\r]+ */g, ' '),
    subTitleStyles: {
      color: 'black',
    },
    title: 'React Native Icon Collection',
    titleStyles: {
      color: 'black',
    },
  },
  {
    backgroundColor: '#0DFF00',
    image: <Image source={require('../../assets/images/illustration.png')} />,
    subtitle: `A generic, Logo library for React Native apps,
      following modern approach by building your project's
      UI in isolation using state of the art Storybook along
      with React Native.`.replace(/[\n\r]+ */g, ' '),
    subTitleStyles: {
      color: 'black',
    },
    title: 'React Native Logo Collection',
    titleStyles: {
      color: 'black',
    },
  },
  {
    backgroundColor: '#0DFF00',
    image: <Image source={require('../../assets/images/illustration.png')} />,
    subtitle: `A generic, Emoji library for React Native apps,
      following modern approach by building your project's
      UI in isolation using state of the art Storybook along
      with React Native.`.replace(/[\n\r]+ */g, ' '),
    subTitleStyles: {
      color: 'black',
    },
    title: 'React Native Emoji Collection',
    titleStyles: {
      color: 'black',
    },
  },
];
