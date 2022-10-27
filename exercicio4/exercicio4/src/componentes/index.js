import {} from './style.css'
import React, { useCallback } from 'react';
//import { useState } from "react"; ou assim

export default function Botao() {
  const [valor, setValor] = React.useState(0); 
  const aum = () => {setValor(valor+1)};
  const dim = () => {setValor(valor-1)};

  return (
    <div className='tudo'>
      <h1 className='contagem'>Valor: {valor}</h1>
      <button className='botaoAu' onClick={aum}>
        Aumenta o valor em 1
      </button>
      <button className='botaoDi' onClick={dim}>
        Dimunui o valor em 1
      </button>
    </div>
  );
}
