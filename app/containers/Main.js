import React, {Component} from 'react'
import TogglesContainer from '../containers/TogglesContainer'
import GruponesContainer from '../containers/GruponesContainer'

import {connect, Provider} from 'react-redux'
import configureStore from '../store/store'
import actions from '../actions/actions'
import { bindActionCreators } from 'redux'
let store = configureStore()

class Main extends Component {
  render() {
    return (
        <div>
          Map here
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions,dispatch)
  }
}

// function mergeProps(stateProps, dispatchProps, ownProps) {
//   return Object.assign({}, ownProps, {
//     store
//   })
// }

export default connect(state => state, mapDispatchToProps)(Main);
// export default Main;
