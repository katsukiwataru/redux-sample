import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Actions } from '../actions/';

export interface State {
  name: string;
  email: string;
}

const initialState: State = {
  name: '',
  email: '',
};

export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.updateName, (state, name) => {
    return Object.assign({}, state, { name });
  })
  .case(Actions.updateEmail, (state, email) => {
    return Object.assign({}, state, { email });
  });
