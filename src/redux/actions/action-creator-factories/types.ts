export interface IEmptyAction<T extends string> {
  type : T;
}

export interface IActionData<D> {
  data : D;
}

export interface IPayloadAction<T extends string, D> extends
  IEmptyAction<T>, IActionData<D> {}

export interface IAction {
  type : string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data ? : any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TActionCreator = (...args : Array<any>) => IAction;
export type TAction<AC extends TActionCreator> = ReturnType<AC>;

interface IMap { [K : string] : TActionCreator; }

/**
 * Helper which returns a map of types of each action by creators passed in as a Map
 *
 * @example
 *  import * as CfdActions from 'actions/cfd';
 *  type CfdActionTypeMap = TActionMap<typeof CfdActions>;
 *  type onChangeAction = TCfdActionMap['onChange']
 */
export type TActionMap<T extends IMap> = {
  [K in keyof T] : TAction<T[K]>
};

/**
 * Helper which combines the types of each action by creators passed in as a Map
 *
 * @example
 *  import * as CfdActions from 'actions/cfd';
 *  type CfdAction = TActionsMap<typeof CfdActions>;
 *
 *  const test = (action : CfdAction) => {
 *    if (action.type === 'onChange') {
 *      // narrowed down to onChange action
 *    }
 *   switch (action.type) {
 *     case 'onChange' : {
 *       // narrowed down to onChange action
 *     }
 *   }
 * };
 */
export type TActionsMap<T extends IMap> = TActionMap<T>[keyof TActionMap<T>];
