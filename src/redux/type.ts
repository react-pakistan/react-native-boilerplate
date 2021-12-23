/* eslint-disable */

export interface IMainScreen {
  showApp : boolean;
  showOnboarding : boolean;
}

export interface IProfile {
  avatar_url : string;
  name : string;
  bio : string;
  company : string;
  // [key : string] : unknown;
}

export interface IProfileScreen {
  error : null | Error;
  isLoading : boolean;
  userData : null | IProfile;
}

export interface IState {
  mainScreen : IMainScreen;
  profileScreen : IProfileScreen;
}
