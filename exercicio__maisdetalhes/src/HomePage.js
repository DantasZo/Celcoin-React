import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [Menu, setMenu] = useState(null);

  useEffect(() => {
    const promise = axios.get("http://localhost:1234/menu");
    promise.then(response => {
      setMenu(response.data);
    })
  }, []);

  function buildMenu() {
    if (!Menu) return <h1>Carregando...</h1>
    return Menu.map(recipe => {
      const url = `/recipes/${recipe.id}`;
      return (
        <li><Link to={url}>{recipe.item}</Link></li>
      )
    })
  }

  const MenuComponent = buildMenu();
  return (
    <div className="HomePage">
      <h1>Receitinhas delícia 🍔🍟</h1>
      <ul>
        {MenuComponent}
      </ul>
    </div>
  )
}