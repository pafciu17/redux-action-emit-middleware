import Socket from 'socket.io-client';

const actionEmitMiddleware = (url) => {
  const connection = Socket(url);
  return (store) => {
    connection.on('action', (data) => {
      const actionData = Object.assign({}, data, { remote: true });
      store.dispatch(actionData);
    });
    return next => action => {
      if (!action.remote) {
        connection.emit('action', action);
      }
      return next(action);
    };
  };
};

export default actionEmitMiddleware;