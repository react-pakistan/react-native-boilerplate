import { IEmptyAction } from './types';

type createEmptyAction<T extends string> = () => IEmptyAction<T>;

export const emptyActionCreator = <T extends string>(
  actionType : T,
) : createEmptyAction<T> => () : IEmptyAction<T> => ({ type: actionType });
