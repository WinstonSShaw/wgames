


import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";


import './App.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a WGames"/>
    </div>
  );
};

export default App;
