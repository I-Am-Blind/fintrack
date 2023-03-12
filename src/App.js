import pro from "./pro.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="h-screen w-screen bg-bgimage bg-no-repeat bg-cover bg-center bg-fixed flex flex-col items-center">
      <div className="navbar w-screen h-16 text-white font-primary flex justify-between px-8 py-2 items-center">
        <div className="flex gap-4 justify-center">
          <img src={pro} className="h-6 w-6" />
          <h3> Welcome Adarsh </h3>
        </div>
        <div className="flex gap-16">
          <div>Home</div>
          <div>Settings</div>
          <div>Logout</div>
        </div>
      </div>

      <div className="container w-screen h-full flex gap-4 ">
        <div className="left-container  h-[30rem] w-[60rem] rounded-xl  border-[1px] border-solid">
          <div className="text-xl font-semibold font-primary text-white p-4">
            Recent Transactions
          </div>
          <div className="card-container flex gap-2 justify-center items-center px-4">
            <Card name="Spotify" plan="individual plan" price="500" />
            <Card name="Spotify" plan="individual plan" price="500" />
            <Card name="Spotify" plan="individual plan" price="500" />
            <Card name="Spotify" plan="individual plan" price="500" />
          </div>

          <div className="text-xl font-semibold font-primary text-white p-4">
            Add Transaction
          </div>

          <div className="t-container px-4">
            <div className="container-2 flex gap-8">
             <div>
             <input
                className="h-8 w-24 rounded-xl  px-2"
                placeholder="Name"
              ></input>

<input
                className="h-8 w-24 rounded-xl  px-2"
                placeholder="Amount"
              ></input>
             </div>

              <button className="button rounded-xl p-2 text-white font-primary text-sm shadow-xl">
                Add transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
