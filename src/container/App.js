import React,{Component} from 'react';
import 'styles/index.scss';
import Dashboard from 'pages/dashboard';

import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { axiosAuthMiddleware } from 'middleware/axios-middleware';
import reducers from 'redux/reducers';


const createStoreWithMiddleware = applyMiddleware(
  reduxThunk,
  logger,
  axiosAuthMiddleware
)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Dashboard {...this.props} />
        </div>
      </Provider>
    );
  }
}

export default App;

