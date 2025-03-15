import React from 'react';
import ReactDOM from 'react-dom/client';

import { Named } from './DemoNamedExport';
import Default, { Named1 } from './DemoExport';
import Alias from './DemoDefaultExport';

import FunctionComponent from './FunctionComponentPureReact';
import JSXComponent from './JSXComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Named />
      <Default />
      <Named1 />
      <Alias />
      <FunctionComponent />
      <JSXComponent />
   </React.StrictMode>
);