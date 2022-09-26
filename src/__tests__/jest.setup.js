import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);
jest.mock(
  '../../node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter',
);
