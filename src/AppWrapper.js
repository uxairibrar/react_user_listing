import React from 'react';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore, compose } from 'redux';

//Components
import App from './App';

const AppWrapper = () => {
  const composeEnhancers =
    process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
      : compose;

  const store = createStore(rootReducer, composeEnhancers());

  return (
    <Provider store={store}>
      <App />;
    </Provider>
  );
};

export default AppWrapper;
