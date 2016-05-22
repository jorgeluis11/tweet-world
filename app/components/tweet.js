import React,{Component} from 'react';

class Tweet extends Component{
  constructor(props){
    super(props)
  }
  componentWillUpdate (nextProps, nextState) {
      console.log('----');
      console.log(this.state.tweet);
  }

  render(){
    var tweet = this.props.tweet;
    return(
      <center style={{width:"500px", margin:"0 auto"}}>
        <div className="row" style={{"padding":"10px", "border":"1px solid rgba(0,0,0,0.1)", "margin": "10px !important", "borderRadius": "5px"}} >
          <div className="col-sm-2">
            <img src={tweet.user.profile_image_url}></img>
            <br/>
            {tweet.user.name}
          </div>
          <div className="col-sm-8" style={{"textAlign":"left"}}>
            {tweet.text}
          </div>
        </div>
      </center>
    );
  }
}

export default Tweet;
