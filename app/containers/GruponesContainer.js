import React, { Component } from 'react'
import Grupon from '../components/Grupon'
// import{ getSearchResult } from '../utils/foodHelpers'
import actions from '../actions/actions'
import ReactSpinner from 'react-spinjs';


class GruponesContainer extends Component {
  constructor(props){
    super(props)
    // const list = getSearchResult("Cheese");
  }

  handleSearchResult() {
    // const list = getSearchResult("Cheese");
    // this.setState(
    //   list 
    //   );
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("submitted");
  }

  // async 
  componentWillMount(){
    // this.props.dispatch(actions.getGrouponList());
  }

  render() {
    console.log(this.props.loading)
    var loading =this.props.loading;
    if (loading) {
      let config = {
        // a few sensible defaults
        width: 5,
        radius: 10,
        length: 12,
        color:"#444444"
      }
      return (
        <div className="row row-heigh">
            <ReactSpinner config={config}/>
        </div>

        )
    };
    if (this.props.list.length == 0) 
      return (
          <div className="row row-heigh">
          <h3 style={{marginTop:"150px",textAlign:"center"}}>Selecciona una pagina de Groupones!</h3>
          </div> 
        )

    return (
      <div className="row row-heigh">
        {
          this.props.list.map((grupon, i) => <Grupon dispatch={this.props.dispatch} grupon={grupon} key={i} />)
        }
      </div>  
      
    )}
    
}

GruponesContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

export default GruponesContainer;