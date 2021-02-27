import React from 'react';
import { registerRootComponent } from 'expo';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import middlewares from './middlewares';

import App from './App';
import { reduxSubscriber } from './lib/asyncStorage';

const store = createStore(reducers, middlewares);

store.subscribe(() => {
  return reduxSubscriber(store.getState)
});

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(ConnectedApp);
