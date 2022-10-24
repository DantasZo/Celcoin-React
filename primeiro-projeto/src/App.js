import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Exercício - Café da manhã</h1>
      <ul>
        <li>Pão</li>
        <li>Banana</li>
        <li>Milk Shake de Doce de Leite</li>
        <li>Nutella</li>
        <li>Sorvete</li>
      </ul>
        <a
          className="App-link"
          href="https://diegopinho.notion.site/Aula-01-Introdu-o-ao-React-de28c4dd17e6468e89e109bb076417d4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Exercicio 1
        </a>
      </header>
    </div>
  );
}

export default App;
