import { IProfile, IState } from '../type';

export const getUserIsLoadingFromState = (state : IState) : boolean => state.profileScreen.isLoading;
export const getUserDataFromState = (state : IState) : null | IProfile => state.profileScreen.userData;
