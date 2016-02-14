Middleware for emitting redux actions over socket

```js
...
import { createStore, applyMiddleware } from 'redux';
import createActionEmitMiddleware from 'redux-action-emit-middleware';

const externalActionMiddleware = createActionEmitMiddleware('http://localhost:3000');
const createStoreWithMiddleware = applyMiddleware(externalActionMiddleware)(createStore);
...

```