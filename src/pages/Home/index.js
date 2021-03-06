import React, {useState,useEffect} from 'react';
import api from '../../services/api';
import {MdFlightTakeoff} from 'react-icons/md'; // react-icons
import './style.css';

import {addReserveRequest} from '../../store/modules/reserves/actions'

import {useDispatch} from 'react-redux';


// export default function Home({history}) {
export default function Home() {
  //redux
  const dispatch = useDispatch();
  //estado inicial
  const[trips,setTrips] = useState([]);

  //pegando as informacoes da rota trips na api
  useEffect(() => {
    async function loadApi(){
      const response = await api.get('trips');
      setTrips(response.data);
      
     // console.log(response.data);
    }

    loadApi();
    
  },[]);


  //acao disparada do botao adicionar reserva
  function handleAdd(id){
    dispatch(addReserveRequest(id));

    //history.push('/reservas');
  }

 return (
   <div className="box">
   {/* carregando informacoes que form capturadas pela api e percorrendo para gerar saida */}
    {trips.map(trip => (
      <li key={trip.id}>
        <img src={trip.image} alt={trip.title} />
        <strong>{trip.title}</strong>
        <span>Status: {trip.status ? 'Disponivel' : 'Indisponível'}</span>

        <button type="button" onClick={() => handleAdd(trip.id)}>
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