import React, {Component} from "react";
import { api, redux }  from '../services';

import ReactJson from 'react-json-view'

/**
* Este es el unico componente tipo Class, no me gustan pero lo agrego asi, indicando que tambien trabajo con clases.
* las class para el navegador le dan lentitud por el this que no tiene como minificarlo
*/
export default class DetailRepository extends Component {

  state = {
  	params: this.props.match.params??{},
    data:{}
  };

  getDataByUsername = () => api('repository', this.state.params);
  
  componentDidMount(){
  	
    this.unsubscribe = redux.subscribe( () => { 
      
      if(redux.is('repository')){
      	this.setState({data:redux.get('repository')})
      }
    });

    //llamo a la aip con los parametros
    this.getDataByUsername();
  };

  componentWillUnmount = () => this.unsubscribe();

  render() {

    return (
		<div>
			<br />
			<div><b>Name:</b> {this.state.data.name??''} </div>
			<div><b>Language:</b> {this.state.data.language??''} </div>
			<div><b>Description:</b> {this.state.data.description??''} </div>
			<ReactJson src={this.state.data} theme="monokai" />
		</div>
    );
  }
}
