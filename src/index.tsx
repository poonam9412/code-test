import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware  } from 'redux';
import rootReducer from './features/redux/reducers'
import thunk from "redux-thunk";
const store = createStore(rootReducer,applyMiddleware(thunk))
const root = document.getElementById('root');

ReactDOM.render(  
    <Provider store={store}>
      <App />
 </Provider>, root
);