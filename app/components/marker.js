import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Marker extends Component{
  constructor(props){
    super(props)
    // props.tweet.hover = false;

  }

  // state = {
  //   hover: false,
  // }

  // static defaultProps = {
  //   tweet.hover:true
  //
  // }

  // componentWillUpdate (nextProps, nextState) {
  //     // console.log('----');
  // }

  shouldComponentUpdate = shouldPureComponentUpdate;

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }



  render(){
    // var tweet = this.props.tweet;
    // console.log(this.props.tweet.place.full_name)
    if (this.props.tweet.hover)
    {
      // var font = "3em"
      var text = this.props.tweet.text;
      var color = "#000";
    }
    else{
      var text ="";
      // var font = "1.4em"
      var color = "#55acee";

    }
    // <div style={{backgroundColor:"#fff", width:"50px", position:"absolute",top:"-50px"}}>
    //   {text}
    // </div>
    return(

        <FontAwesome
        name='twitter'
        size="1x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.4)',color:color }}
      />

    );
  }
}

export default Marker;
