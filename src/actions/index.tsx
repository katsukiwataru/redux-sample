import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const Actions = {
  updateName: actionCreator<string>('ACTIONS_UPDATE_NAME'),
  updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL'),
};
