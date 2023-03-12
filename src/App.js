import bg from './bg.png';
import './App.css';

function App() {
  return (
    <div className="h-screen w-screen flex ">
     <img className='w-screen h-screen absolute' src={bg}/>
     <div className='navbar bg-white h-32 w-screen'></div>
    </div>
  );
}

export default App;
