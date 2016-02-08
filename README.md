Middleware for emitting redux actions over socket

```js
...
import { createStore, applyMiddleware } from 'redux';
import createActionEmitMiddleware from 'redux-action-emit-middleware';

const externalActionMiddleware = createActionEmitMiddleware('http://pnie.eu:3001');
const createStoreWithMiddleware = applyMiddleware(externalActionMiddleware)(createStore);
...

```