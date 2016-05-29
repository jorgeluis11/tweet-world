import React, {Component, PropTypes} from 'react'

import {connect, Provider} from 'react-redux'
import { bindActionCreators } from 'redux'
import configureStore from '../store/store'
import actions from '../actions/actions'

import io from 'socket.io-client'

import Tweet from '../components/tweet'
import Marker from '../components/marker'

// import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
// var $ = require("react-query");

// import VirtualList from 'react-virtual-list';

// import LazyRender from require('react-lazy-render');
var Menu = require('react-burger-menu').push;

let socket = io(`http://localhost:3000`)

let store = configureStore()

// const K_MARGIN_TOP = 30;
// const K_MARGIN_RIGHT = 30;
// const K_MARGIN_BOTTOM = 30;
// const K_MARGIN_LEFT = 30;

const K_HOVER_DISTANCE = 30;

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
    //  console.log("etest")
    event.preventDefault();
  }

  renderMarkers(tweet){
    const place = tweet.place.bounding_box.coordinates[0];
    // console.log(place)
    // let  lat= puertoRico[1] + Math.random() * (puertoRico[3] - puertoRico[1])
    // let lng = puertoRico[0] + Math.random() * (puertoRico[2] - puertoRico[0])
    let lng = (place[0][0] + place[1][0] + place[2][0] + place[3][0]) / 4
    let lat = (place[1][1] + place[1][1] + place[1][1] + place[1][1]) / 4
    // <VirtualList items={this.props.items} renderItem={this.renderItem} itemHeight={this.props.itemHeight} />
    // let id = newId();
    return <Marker lat={lat} lng={lng} styles={{"width":"10px","height":"10px", fontSize:"1em"}} tweet={tweet} key={tweet.uniqueID} />;

  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  renderItem(tweet){
    // tweet.reactID = newId()
    return (<Tweet tweet={tweet} key={tweet.reactID}/>);
  }
  //             <VirtualList items={this.props.list} renderItem={this.renderItem} itemHeight={300} />

  _onChildClick = (key, childProps) => {
    const markerId = childProps.tweet.get('id');
    const index = this.props.list.findIndex(m => m.get('id') === markerId);
    if (this.props.onChildClick) {
      this.props.onChildClick(index);
    }
  }

  _onChildMouseEnter = (key, childProps) => {
    // console.log(childProps)
    // const markerId = childProps.tweet.get('id');
    // console.log(key)
    // console.log(childProps.reactID);
    // const index = this.props.list.findIndex(m => m.reactID === key);
    // console.log(index);
    // if (this.props.onMarkerHover) {

      // this.props.onMarkerHover(childProps);
    // }
    // console.log(key);
    // console.log(childProps);
    // console.log(key)

    // console.log($("#marker-list"));
    // console.log($(`${key}`));

    let current = this.cumulativeOffset(document.getElementById("marker-list"))
    let scroll = this.cumulativeOffset(document.getElementById(`${key}`));
    this.scrollUp(current,scroll.top,document.getElementById("marker-list"));
    // var doc = document.body,
    // document.getElementById("marker-list").scrollTop = ;
    this.props.actions.hoverTweet(key,true);
  }

  cumulativeOffset(element) {
      var top = 0, left = 0;
      do {
          top += element.offsetTop  || 0;
          left += element.offsetLeft || 0;
          element = element.offsetParent;
      } while(element);

      return {
          top: top,
          left: left
      };
  }

  scrollUp(current,top, div) {
      //  var top = current - top;

       if (top > 0) {
           div.scrollTop = top - 280;
          //  setTimeout(this.scrollUp(current,top, div), 100)
       }
   }

  _onChildMouseLeave = (key, childProps) => {
    // if (this.props.onMarkerHover) {
    //   this.props.onMarkerHover(-1);
    // }
    // childProps.hoverFunc(false);
    this.props.actions.hoverTweet(key,false);
  }

  _onBalloonCloseClick = () => {
    if (this.props.onChildClick) {
      this.props.onChildClick(-1);
    }
  }
  //           <Menu styles={styles} customBurgerIcon={ <div><i className="glyphicon glyphicon-menu-hamburger" style={{fontSize:"2em"}}></i></div> } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right  >
  //           </Menu>

  render() {
    // console.log(this.props.list)
    // let tweets = [];
    // this.props.list.map((tweet) => {
    //   // tweet.hover = false;
    //   // tweet.id=newId();
    //   tweets = [...tweets,tweet];
    // });
    return (
      <div className="map-container">
        <div id="outer-container">
          <div id="marker-list" style={{width:"30%", position:"absolute", right:"0px", zIndex:'2 !important', backgroundColor:"#fff",overflowY:"auto",height:"100%"}}>
            {
              this.props.list.map((tweet) => <Tweet tweet={tweet} id={tweet.id} key={tweet.uniqueID}/>)
            }
          </div>
          <main id="page-wrap">
          </main>
        </div>
        <GoogleMap
          style={{width:'100%', height:'100%', position:"absolute"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
          hoverDistance={7}>
          {
               this.props.list.map((tweet) => this.renderMarkers(tweet)  )
          }
        </GoogleMap>

      </div>
    );
  }
}
// {
// x = minLat + rand(maxLat - minLat)
//     y = minLng + rand(maxLng - minLng)
//     latLng = [x,y]
//   //  this.props.list.map((tweet) => <Tweet tweet={tweet} key={newId()}/>)

//  }

var styles = {
  bmMenuWrap:{
    width: "35%",
    backgroundColor:"white",
    overflowY:'auto'
  },
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
    // background: 'white',
    // padding: '2.5em 1.5em 0',
    paddingTop:"30px",
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    // padding: '0.8em'
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
