import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { Actions } from '../actions';
import { Component } from '../components/Component';

export interface Actions {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
  return {
    updateName: (v: string) => dispatch(Actions.updateName(v)),
    updateEmail: (v: string) => dispatch(Actions.updateEmail(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.state);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
