import React, { Component, PropTypes } from 'react'
// var GetCityContainer = require('../containers/GetCityContainer');

// const styles = {
//   container: {
//     backgroundSize: 'cover',
//     backgroundImage: "url('app/images/pattern.svg')",
//     display: 'block',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//     width: '100%'
//   },
//   header: {
//     fontSize: 45,
//     color: 'black',
//     fontWeight: 100,
//   },
// }

class Grupon extends Component {
  constructor(props){
    super(props)
  }

  render(){
    var {image, title,from} = this.props.grupon;
    let img = `app/img/${from}.png`
    let imageClass = `img-size`

    if (!this.props.grupon.image) 
      image = "app/img/no-image.gif";
    if(title.length > 200){
      title = title.substr(0,200)+"...";
    }

    // let fromImageClass = from?`groupon-image from-logo ${from}`:``

    return (
      <a href={this.props.grupon.link} target="_blank">
      <div className="groupon-col margin-top-sm">
        <div className="groupon-image-cut">
          <img className="groupon-image" src={image}></img>
        </div>
        <div className="groupon-info-row">
          <h3>{this.props.grupon.price}</h3>
          <div>
            <img className={imageClass} src={img}>
            </img> 
          </div>
         </div>
        <p className="description">{title}</p>
        
      </div>
      </a>
      )
  } 
}

export default Grupon;