import React, {useState,useEffect} from 'react';
import api from '../../services/api';
import {MdFlightTakeoff} from 'react-icons/md'; // react-icons
import './style.css';


export default function Home() {
  //estado inicial
  const[trips,setTrips] = useState([]);

  //pegando as informacoes da rota trips na api
  useEffect(() => {
    async function loadApi(){
      const response = await api.get('trips');
      setTrips(response.data);
      
      console.log(response.data);
    }

    loadApi();
    
  },[]);

  

 return (
   <div className="box">
    {trips.map(trip => (
      <li key={trip.id}>
        <img src={trip.image} alt={trip.title} />
        <strong>{trip.title}</strong>
        <span>Status: {trip.status ? 'Disponivel' : 'Indisponível'}</span>

        <button type="button" onClick={() => {}}>
          <div>
            <MdFlightTakeoff size={16} color="#fff"/>
          </div>
          <span>SOLICITAR RESERVA</span>
        </button>
      </li>
    ))}
   </div>
 );
}