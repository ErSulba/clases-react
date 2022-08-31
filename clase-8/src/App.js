import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nombre, setNombre] = useState("el toxico")
  const [apellido, setApellido] = useState("perensejo")
  const onSubmit = (e) => {
    e.preventDefault();
    //llamamos a una API/Enviamos un formulario etc
    alert(`hola ${nombre} ${apellido}`)
  }
  return (
    <form onSubmit={onSubmit} >
      <input type="text" name="nombre" value={nombre} onChange={(e) => {
        const { value } = e.target;
        setNombre(value)
      }} />
      <input type="text" name="apellido" value={apellido} onChange={(e) => {
        const { value } = e.target;
        setApellido(value)
      }} />
      <button type="submit">enviar</button>
    </form>
  );
}

export default App;
