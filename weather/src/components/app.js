import React, { Component } from 'react';
import  Search_bar from '../containers/Search_bar' 
import WeatherList from '../containers/Weatherlist'
export default class App extends Component {
  render() {
    return (
      <div>
      <div><Search_bar/></div>
      <div><WeatherList/></div>
      </div>
    )
  }
}
