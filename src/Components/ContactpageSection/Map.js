import React from 'react';
import mapboxgl from 'mapbox-gl';


// const Map = () => {
mapboxgl.accessToken = 'pk.eyJ1IjoicnVzaGFsaXNhdmFsaXlhMTIiLCJhIjoiY2t5Y256ZmJjMGNvaDJ2dXJ2dnppZHhjYSJ9.AGWE2Ex-QM0g7v7Ucp5hBg';

class Mapp extends React.Component{

    


    constructor(props){
        super(props);
        this.state = {
        lng: -70.9,
        lat: 42.35,
        zoom: 9
        }
    }
    componentDidMount(){
        // const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
    }
    
    render()
    {
        return (
            <div className="map-image-wrap">
                <div id="map" ref={el => this.mapContainer = el} className="map-container"></div>
            </div>
        )
    }
}

export default Mapp;