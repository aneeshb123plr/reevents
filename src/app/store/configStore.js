import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../store/rootReducer';

export const configStore = () => {
  return createStore(rootReducer, devToolsEnhancer());
};
