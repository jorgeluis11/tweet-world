import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Marker extends Component{
  constructor(props){
    super(props)
  }

  componentWillUpdate (nextProps, nextState) {
      // console.log('----');
  }

  // shouldComponentUpdate = shouldPureComponentUpdate;

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render(){
    // var tweet = this.props.tweet;
    // console.log(this.props.tweet.place.full_name)

    return(
      <div className="marker" lat={this.props.lat} lng={this.props.lng} style={this.props.styles} >
        <FontAwesome
        name='twitter'
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.4)',color:"#55acee", fontSize:"1.4em" }}
      />
      </div>
    );
  }
}

export default Marker;
