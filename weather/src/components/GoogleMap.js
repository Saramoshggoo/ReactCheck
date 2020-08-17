import React from 'react'

class GoogleMap extends React.Component {
    //script to index.js ma import shode as link
    componentDidMount(){
        const google = window.google;
        // koja google map render she (this.ref.map) ke div ke behsh ref=map dadin
        //google.maps.Map vase neshoon dadan google map 
        new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat:this.props.lat,
                lng:this.props.lon
            }
        })
    }
    render(){
    return (
        <div ref="map" />
            
    
    )
}
}
export default GoogleMap
