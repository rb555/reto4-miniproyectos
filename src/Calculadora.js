import React, { useState } from 'react';
import './App.css';


const Calculadora = () => {
  const [ingresos, setIngresos] = useState('');
  const [gastos, setGastos] = useState('');
  const [total, setTotal] = useState('');

  const handleIngresosChange = (event) => {
    setIngresos(event.target.value);
  };

  const handleGastosChange = (event) => {
    setGastos(event.target.value);
  };

  const calcularTotal = () => {
    const ingresosNum = parseFloat(ingresos);
    const gastosNum = parseFloat(gastos);
    const totalNum = ingresosNum - gastosNum;
    setTotal(totalNum.toFixed(2));
  };

  return (
    <div id='container'>
      <label>
        Ingresos:
        <input type="number" value={ingresos} onChange={handleIngresosChange} />
      </label>
      <br />
      <label>
        Gastos:
        <input type="number" value={gastos} onChange={handleGastosChange} />
      </label>
      <br />
      <button onClick={calcularTotal}>Calcular</button>
      <br />
      <label>
        Total:
        <input type="text" value={total} readOnly />
      </label>
    </div>
  );
};

export default Calculadora;