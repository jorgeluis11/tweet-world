import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Main from '../containers/Main'
// import ForecastContainer from' ../containers/ForecastContainer'
// import DetailContainer from '../containers/DetailContainer'
import configureStore from '../store/store'
import { Provider } from 'react-redux'

let store = configureStore()


class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
          <Main/>
      </Provider>
    );
  }
}


export default Routes;
