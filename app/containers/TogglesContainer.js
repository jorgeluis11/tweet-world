import React, { Component, PropTypes } from 'react'
import Toggle from '../components/Toggle'
// import{ getSearchResult } from '../utils/foodHelpers'
import {connect} from 'react-redux'
import actions from '../actions/actions'


class TogglesContainer extends Component {
  constructor(props){
    super(props)
    this.handleToggle.bind(this);
    // const list = getSearchResult("Cheese");
  }

  componentWillReceiveProps(props) {
    }

  onTextChange(event){
    // this.setState({
    //   value: event.target.value
    // })
    // console.log(event.target.value)
    // this.props.dispatch(actions.searchProfesor(this.state.value));
  }

  handleToggle(id, active){
    if (!active) {
      this.props.dispatch(actions.loading());
      this.props.dispatch(actions.toggleGroupon(id));
      this.props.dispatch(actions.getToggledList(this.props.list))
    };
    
    // this.props.dispatch(actions.loading(true));
  }
  

  // async 
  // componentWillMount(){
  //   this.props.dispatch(actions.getTodoList());
  // }



  render() {
    // console.log("list",this.props)
    return (
      <div className="row">

        {
          this.props.list.map((site, i) => <Toggle dispatch={this.props.dispatch} handleToggle={() => this.handleToggle(i, site.active)} site={site} key={i} />)
        }
      </div>      
    )}
    
}

export default TogglesContainer;