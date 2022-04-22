import "./App.css";
function Nombre(props) {
  return (
    <>
      <h1>{props.nombre}</h1>
      <p style={{color: props.color}}>{props.saludo} </p>
    </>
  );
}
export default Nombre;
