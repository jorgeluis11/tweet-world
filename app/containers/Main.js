import React, {Component, PropTypes} from 'react'

import {connect, Provider} from 'react-redux'
import { bindActionCreators } from 'redux'
import configureStore from '../store/store'
import actions from '../actions/actions'

import io from 'socket.io-client'
import newId from '../utils/newid';

import Tweet from '../components/tweet'
import Marker from '../components/marker'
// import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
var Menu = require('react-burger-menu').slide;

let socket = io(`http://localhost:3000`)

let store = configureStore()

class Main extends Component {
  constructor(props) {
    super(props);
    socket.on('call tweets',function(tweet){
      props.actions.addList(tweet);
    });
  }

  static defaultProps = {
    center: {lat: 18.257503, lng: -66.481117},
    zoom:9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
   }

   showSettings(event) {
     console.log("etest")
    event.preventDefault();
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className="map-container">
        <div id="outer-container">
          <Menu styles={styles} customBurgerIcon={ <div><i className="glyphicon glyphicon-menu-hamburger" style={{fontSize:"2em"}}></i></div> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right  >
            <a id="home" className="menu-item" href="/">Home</a>
             <a id="about" className="menu-item" href="/about">About</a>
             <a id="contact" className="menu-item" href="/contact">Contact</a>
             <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
          <main id="page-wrap">
          </main>
        </div>
        <GoogleMap
          style={{width:'100%', height:'100%', position:"absolute"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
            <Marker lat={18.257503} lng={-66.481117} styles={{"width":"100px","height":"100px"}} text={'A'}/>
        </GoogleMap>

      </div>
    );
  }
}
// {
//   //  this.props.list.map((tweet) => <Tweet tweet={tweet} key={newId()}/>)
//  }

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '10px',
    top: '10px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

//
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
