import React, { Component } from "react";
import {Link} from "react-router-dom";
 
export default class LastProduct extends Component {

    constructor(props){
        super(props)
        this.state = {
         allProducts: []
        }
    }
   async componentWillMount() {
    try {
        let request = await fetch("http://localhost:3030/api/products")
        let data = await request.json()
        this.setState({...this.state,allProducts: data.productos.pop()})
    } catch(error) {
        return new Error(error)
    }
   }
 
  render() {
      return (
          <main>
            <h2>Último producto creado:</h2>
            <div>{this.state.allProducts.name}</div>
            <div>{this.state.allProducts.description}</div>
            <p><Link to="/" exact={true}>Home</Link></p>
          </main>
      )
    }
}