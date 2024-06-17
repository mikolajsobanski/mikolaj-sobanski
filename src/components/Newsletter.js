import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './css/mapwithcontact.css';
import "./css/technology.css"


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export const Newsletter = ({ status, message, onValidated }) => {

  const position = [50.06465, 19.94498]; // Coordinates for Krakow

  return (
    <div>
      <section className="technology" id="technology">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="skill-bx wow zoomIn">
        <div className="container-map">
        <div className="map-column">
          <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Krakow, Poland
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="contact-column">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> mikolajsobanski01@gmail.com</p>
          <p><strong>Phone:</strong> +48 533 111 784</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/miko%C5%82aj-soba%C5%84ski-278a79275/" target="_blank" rel="noopener noreferrer">Mikołaj Sobański</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/mikolajsobanski?tab=repositories" target="_blank" rel="noopener noreferrer">Mikołaj Sobański</a></p>
        </div>
      </div>

      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}