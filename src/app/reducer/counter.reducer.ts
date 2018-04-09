import { ActionReducer, Action } from '@ngrx/store';

export const counterReducer: ActionReducer<number> = (state: number = 0, action: Action) => {

  switch (action.type) {
    case 'Increment':
          return state + 1;
    case 'Decrement' :
      return state - 1;
    case 'Reset' :
          return 0;
    default:
      return state;
  }
};
