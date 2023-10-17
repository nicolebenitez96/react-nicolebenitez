 let nombre = prompt("Bienvenidx a Antología Velas. Ingrese su nombre por favor");

const Saludo = ({greeting}) =>{
     return (
         <p className="saludo">{greeting}{nombre}
         </p>
         
     );
 };

 export default Saludo;