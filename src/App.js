import Ahmet from "./components/Ahmet";
import Person from "./components/Person";
import { Button, Alert } from 'react-bootstrap';


function App() {
  const variable = 'Mehmet';
  let propsDeneme = "Hakan";
  const clickFunc = () => {
    alert('the button is clicked')
  }
  const arr = [
    { id: 0, name: 'array1' },
    { id: 1, name: 'array2' },
    { id: 2, name: 'array3' }
  ]
  return (
    <div className="App">
      {variable}
      <Ahmet ahmet={propsDeneme} />
      <Person name='Eren' surname='Yılmaz'>
        <p>This is children props. Use props.children in child component to render this p tag(children props). </p>
      </Person>
      {/* children propsunu da önce parent componentde yazarız sonra propsu aldığı yerde (child component) tanımlarız */}
      <Person name='Mustafa' surname='Yıldırım' >
        <Ahmet ahmet='Ahmet Mümtaz Taylan'></Ahmet>
      </Person>
      <Person name='Göktuğ' surname='Demir' >
        <br></br>
        <Button onClick={clickFunc}>Tıkla</Button>
        <Alert>Alert</Alert>
      </Person>
      {/* component içinde html veya başka bir child component render etmek için {props.children} kullanılmalı */}
      <Person name='Emrah' surname='Şentürk' />
      <Person name='Ertan' surname='Taşçı' />
      <>
        {arr.map((element) => <div key={element.id}> id of element is {element.id}, name of element is {element.name} </div>)}
      </>
      {/* map ile çalışırken her bir element için unique bir key verilmeli. */}

    </div >
    // önce parent componentde propps gir child componente sonra child componentde tanımla.

    // functional component yerine class component şeklinde oluştursaydık this.props.name şeklinde kullanmamız
    // gerekirdi. Class componentlerde this kullanılır. Functional componentlerde this kullanılmaz.
  );
}

export default App;
