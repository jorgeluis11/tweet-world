import React,{Component} from 'react';
import LazyLoad from 'react-lazy-load';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Tweet extends Component{
  constructor(props){
    super(props)
    // props.tweet.hover = false;
  }
  componentWillUpdate (nextProps, nextState) {
      // console.log('----');
      // console.log(this.state.tweet);
  }

  // shouldComponentUpdate = shouldPureComponentUpdate;

  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render(){
    var tweet = this.props.tweet;

    if (tweet.hover)
    {
      // var font = "3em"
      var background = "rgba(0,0,0,0.07)";
      // var color = "#000";
      var border = "solid 1px rgba(0,0,0,.080)";
    }
    else{
      // var text ="";
      // var font = "1.4em"
      var background = "#fff";
      var border = "solid 1px rgba(0,0,0,.080)";

    }
    // var image =
    return(
      <LazyLoad height={140} offset={300} once >

        <div className="row" style={{borderBottom:border, paddingBottom:"10px !important", paddingTop:"25px !important", backgroundColor:background, height:"140px"}} >
          <div className="col-sm-3" style={{paddingRight:"0 !important", backgroundColor:background}}>

              <img className="profile-picture " src={`https://twitter.com/${tweet.user.screen_name}/profile_image?size=original`}></img>

        </div>

          <div className="col-sm-9"  style={{"textAlign":"left", paddingLeft:"10px"}}>
            <div style={{fontSize:".9em", 'wordWrap': 'break-word', color:'#222'}}><b>{tweet.user.screen_name}</b></div>
            <span style={{color:'#444'}}>{tweet.text}</span>
          </div>
        </div>
      </LazyLoad>

    );
  }
}

// <center style={{width:"500px", margin:"0 auto"}}>
//   <div className="row" style={{"padding":"10px", "border":"1px solid rgba(0,0,0,0.1)", "margin": "10px !important", "borderRadius": "5px"}} >
//     <div className="col-sm-2">
//       <img src={tweet.user.profile_image_url}></img>
//       <br/>
//       {tweet.user.name}
//     </div>
//     <div className="col-sm-8" style={{"textAlign":"left"}}>
//       {tweet.text}
//     </div>
//   </div>
// </center>

export default Tweet;
