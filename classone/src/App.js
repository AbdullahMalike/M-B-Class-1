import logo from './logo.svg';
import './App.css';

function App() {
let mobiles = [
  {
    name : "Samsung",
    brand : "a22",
    ram : 4,
    rom : 128,
    camera : 48,
    price : 40000
  },
  {
    name : "Samsung",
    brand : "a32",
    ram : 6,
    rom : 128,
    camera : 64,
    price : 50000
    
  },
  {
       name : "Samsung",
    brand : "a52",
    ram : 8,
    rom : 128,
    camera : 64,
    price : 65000
 
  },
  {
       name : "xiomi",
    brand : "redmi note 10",
    ram : 6,
    rom : 128,
    camera : 48,
    price : 30000
 
  },
 {
       name : "xiomi",
    brand : "redmi note 8",
    ram : 4,
    rom : 128,
    camera : 48,
    price : 28000
 
 } ,
 {
       name : "vivo",
    brand : "vivo y23",
    ram : 8,
    rom : 128,
    camera : 64,
    price : 45000
 
 },
 
]

  return (
    <div className="App">
      <header className="App-header">
        {
          mobiles.map((x,i)=>{
return(
  <div className='mobilecard'>
    <h1>{x.name}</h1>
    <h3>Model : {x.brand}</h3>
    <h5>Ram : {x.ram}</h5>
    <h5>Ram : {x.rom}</h5>
    <h5>Ram : {x.camera}</h5>
<h5>Price {x.price } /-</h5>
  </div>
)
          })
        }
      </header>
    </div>
  );
}

export default App;
