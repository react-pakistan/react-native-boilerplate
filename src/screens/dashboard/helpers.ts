export const dashboardScreenText = {
  mainHeading: 'React Pakistan Open Source Projects',
};

export const openSourceMainProjects : Array<IProject> = [
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg',
    description: `React Pakistan is an OpenSource & Free Software (FOSS) platform,
      creating React software solutions for the global community.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-main-project-1',
    label: 'React Pakistan',
  },
];

export const openSourceMobileProjects : Array<IProject> = [
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1548862588/react-native-boilerplate.jpg',
    description: `A collection of curated and well maintained React Native
      boilerplates with various possibilities and combinations.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-mobile-project-1',
    label: 'React Native Boilerplates',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650645/GitHub/react-native-commons-collection.jpg',
    description: `A generic, Commons library for React Native apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React Native.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-mobile-project-2',
    label: 'React Native Commons Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650649/GitHub/react-native-ui-collection.jpg',
    description: `A generic, UI library for React Native apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React Native.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-mobile-project-3',
    label: 'React Native UI Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650647/GitHub/react-native-icon-collection.jpg',
    description: `A generic, Icon library for React Native apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React Native.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-mobile-project-4',
    label: 'React Native Icon Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650647/GitHub/react-native-icon-collection.jpg',
    description: `A generic, Logo library for React Native apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React Native.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-mobile-project-5',
    label: 'React Native Logo Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1583650647/GitHub/react-native-icon-collection.jpg',
    description: `A generic, Logo library for React Native apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React Native.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-mobile-project-6',
    label: 'React Native Emoji Collection',
  },
];

export const openSourceWebProjects : Array<IProject> = [
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566355017/GitHub/react-commons-collection.jpg',
    description: `A generic, Commons library for React web apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-web-project-1',
    label: 'React Commons Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566355010/GitHub/react-ui-collection.jpg',
    description: `A generic, UI library for React web apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-web-project-2',
    label: 'React UI Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499955/GitHub/react-icons-collection.jpg',
    description: `A generic, Icon library for React web apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-web-project-3',
    label: 'React Icon Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499957/GitHub/react-logo-collection.jpg',
    description: `A generic, Logo library for React web apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-web-project-4',
    label: 'React Logo Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499957/GitHub/react-emoji-collection.jpg',
    description: `A generic, Logo library for React web apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-web-project-5',
    label: 'React Emoji Collection',
  },
  {
    banner: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499950/GitHub/react-design-collection.jpg',
    description: `A generic, Design library for React web apps, following modern approach by building your
      project's UI in isolation using state of the art Storybook along with React.`.replace(/[\n\r]+ */g, ' '),
    id: 'react-pakistan-open-source-web-project-6',
    label: 'React Design Collection',
  },
];

export interface IProject {
  banner : string;
  description : string;
  id : string;
  label : string;
}
