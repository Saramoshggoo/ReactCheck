import React from 'react'
import {connect} from 'react-redux'

import Chart from '../components/Sparkline'
import GoogLeMap from '../components/GoogleMap'
class  Weatherlist extends React.Component {
    renderweather(cityData){
        //baraye grafha man neyaz darim list temp dashte bashim
        //khate pain masalan  age san jose bezanim tempo as list negah midare
        
        //npm install --save react-sparklines
        const temps=cityData.list.map(weather=>weather.main.temp)
        const  pressures=cityData.list.map(weather=>weather.main.pressure)
        const  humidities=cityData.list.map(weather=>weather.main.humidity)
        const  lon=cityData.city.coord.lon;
        const lat=cityData.city.coord.lat;
        //2 khate balaro intori ham mishe nevesht
        // const {lon,lat}=cityData.city.coord
        console.log(temps)
        return(
        <tr key={cityData.city.id}>
            <td >
                <GoogLeMap lon={lon} lat={lat}/>
            </td>
            <td>
            <Chart data={temps} color="blue" units="k"/>
            </td>
            <td>
            <Chart data={pressures} color="yellow" units="hPa"/>
            </td>
            <td>
            <Chart data={humidities} color="green" units="%"/>
            </td>
        </tr>)
    }
    
    render(){
        
    return (
        <div>
            <table className="table table-hover">
              <thead>
                  <tr>
                      <th>City</th>
                      <th>Tempeture(k)</th>
                      <th>pressure(hPa)</th>
                      <th>Humidity(%)</th>
                  </tr>
              </thead>
              <tbody>
                    {this.props.weather.map(this.renderweather)}
              </tbody>
            </table>
        </div>
    )
}
}
function MapStateToProps({weather}){
    
    return { weather}
}
export default  connect(MapStateToProps)(Weatherlist)
