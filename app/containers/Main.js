import React, {Component} from 'react'
import {connect} from 'react-redux'
import TogglesContainer from '../containers/TogglesContainer'
import GruponesContainer from '../containers/GruponesContainer'


// var GetCityContainer = require('./GetCityContainer');

// const styles = {
//   container: {
//     width: '100%',
//     height: '92%'
//   },
//   header :{
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     background: 'rgba(252, 90, 44, 0.89)',
//     color: '#fff',
//     padding: 5,
//   }
// }



class Main extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   name:"jorge"
    // }
  }
  render() {
    return (
      <div>
        <TogglesContainer list={this.props.grouponList} dispatch={this.props.dispatch} handleSubmit={this.handleSubmit}/>
        <GruponesContainer list={this.props.list} loading={this.props.loading} dispatch={this.props.dispatch} todos={this.props.todos}/>
      </div>
    );
  }
}


// Main.contextTypes = {
//     router: React.PropTypes.object.isRequired
//   }

//   Main.setDefaultProps = {
//       name:"jorge"

//   }

function mapStateToProps(state){
  console.log("state", state)
  return state;
}

export default connect(mapStateToProps)(Main);
