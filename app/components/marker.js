import React,{Component} from 'react';

class Marker extends Component{
  constructor(props){
    super(props)
  }

  componentWillUpdate (nextProps, nextState) {
      console.log('----');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render(){
    var tweet = this.props.tweet;
    return(
      <div className="marker" lat={this.props.lat} lng={this.props.lng} styles={this.props.styles} >
        {this.props.text}
      </div>
    );
  }
}

export default Marker;
