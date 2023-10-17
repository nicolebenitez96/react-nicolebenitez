import Saludo from "./Components/NavBar/ItemListContainer/itemListContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
   <div>
    <NavBar/>
    <Saludo greeting='Hola '/>
   </div>
  );
};

export default App;
