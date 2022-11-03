import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PaginadoItem from './PaginadoItem'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:recipeID" element={<PaginadoItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
