import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'
 class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {term:''};
        this.onFormSubmit=this.onFormSubmit.bind(this)
        //age onChange function nakham inline benevism byatd in khataro benevsim
        //1 . this.onInputChange=this.onInputChange.bind(this)
        // harvaght to khode function this dashte bashim khate balaro vase har function minevism
    }
    //2 onInputChange(event){
      // this.setState({term:event.target.value})
      //3 hala to input onChange={onInputChange}
    //}

    //we use openweathermap api key fb12e28126d00eed083c1899f9a735b8
    // we use promise middleware so install npm install --save redux-promise
    onFormSubmit(e){
        e.preventDefault()
        this.props.fetchWeather(this.state.term);
        //after submit state vase man khali mikone
        this.setState({term:''})
    }
 
    render(){
    return (
        //use boostrap in this poroject
    
        
            <form className="input-group" onSubmit={this.onFormSubmit}>
              <input  value={this.state.term} className="form-control" onChange={(event)=>this.setState({term:event.target.value}) } />
              <span className="input-group-btn">
                  <button  type="submit" className="btn btn-secendary">submit</button>
              </span>
            </form>
       
    )
}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null,mapDispatchToProps)(Searchbar)
