import React from 'react';
import './style.css';
import {MdDelete} from 'react-icons/md';

import {useSelector} from 'react-redux';

export default function Reservas() {

  const reserves = useSelector(state => state.reserve);

  console.log('MINHA RESERVA: ', reserves);

 return (
   <div>
    <h1>Voce solicitou 1 reservas</h1>

    <div className="reservas">
      <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Maceió"/>

      <strong>Viagem Maceio 7 dias</strong>
      <span>Quantidade: 2</span>

      <button type="button" onClick={() => {}}>
        
        <MdDelete size={20} color="#fff" />
      </button>
    </div>

    <footer>

     <button type="button">Solicitar Reservas</button>
   </footer>

   </div>
 );
}