import React from 'react';
import { State } from '../reducers';
import { Actions } from '../containers';

interface OwnProps {}

type Props = OwnProps & State & Actions;

export const Component: React.SFC<Props> = (props: Props) => {
  return (
    <div>
      <div className="field">
        <input type="text" placeholder="name" value={props.name} onChange={(e) => props.updateName(e.target.value)} />
      </div>
      <div className="field">
        <input
          type="email"
          placeholder="email"
          value={props.email}
          onChange={(e) => props.updateEmail(e.target.value)}
        />
      </div>
    </div>
  );
};
