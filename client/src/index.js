import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; //Keeps track of state changes
import {
  legacy_createStore as createStore, //createStore is deprecated
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
