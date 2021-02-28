import { IPayloadAction } from './types';

type createPayloadAction<T extends string, D> = (data : D) => IPayloadAction<T, D>;

export const payloadActionCreator = <T extends string, D>(
  actionType : T,
) : createPayloadAction<T, D> => (data : D) : IPayloadAction<T, D> => ({ type: actionType, data });
