// @flow

import React from 'react';
import { Wrapper } from './styled';

type Props = {
  children: React$Node,
  theme?: 'blue' | 'red',
};

export default (props: Props) => <Wrapper theme={props.theme}>{props.children}</Wrapper>;