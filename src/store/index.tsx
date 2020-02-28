import { createStore, combineReducers } from 'redux';
import { Reducer, State } from '../reducers';

export type AppState = {
  state: State;
};

const store = createStore(
  combineReducers<AppState>({
    state: Reducer,
  }),
);

export default store;
