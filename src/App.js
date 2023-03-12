import bg from './bg.png';
import './App.css';

function App() {
  return (
    <div className="h-screen w-screen bg-bgimage bg-no-repeat bg-cover bg-center bg-fixed flex flex-col">

      <div className='navbar w-screen h-16 text-white font-primary'>
        <div>Profile</div>
        <div>
          <div>Home</div>
          <div>Settings</div>
          <div>Logout</div>
        </div>
      </div>
      <div className='container w-screen h-full'></div>
    </div>
  );
}

export default App;
