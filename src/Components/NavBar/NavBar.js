import CartWidget from "./CartWidget/cartWdiget";
import ListaNav from "./Lista/lista";
import Logo from "./Logo/logo"; 
import "./styles.css";

const NavBar = () =>{
     return(
         <div className="NavBarDiv">
            <Logo/>
            <ListaNav/>
            <CartWidget/>
         </div>
     );
 };

export default NavBar;

