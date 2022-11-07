import { useState } from 'react' 

function App() {
  const [texto,setTexto] = useState('')
  
  return (
    <div className="App">
      <textarea placeholder="Digite aí" 
      value={texto}
       rows={15} 
       onChange={((e) =>{
        setTexto(e.target.value)
      })}>
        </textarea>

      <div className="mirror">
        <h1>Código</h1>
        {texto.toUpperCase()}
      </div>
    </div >
  );
}

export default App;
