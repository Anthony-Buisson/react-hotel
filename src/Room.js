import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Room({roomDetails}) {

  return (
    <div>
      <h2>Chambre {roomDetails.name}</h2>
      <span>Numéro : {roomDetails.number}</span> | <span>{roomDetails.price.toFixed(2)}€</span>
    </div>
  );
}

export default Room;
