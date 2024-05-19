import BingoCard from "./components/BingoCard";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";

function App() {
  return (
    <>
      <div className="min-h-screen sm:justify-center items-center mx-2 ">
        <div className="mx-96 max-sm:mx-0 max-sm:px-0 max-lg:mx-16 max-xl:mx-44 mt-2 border-2 border-gray-200  bg-purple-400">
          <div className="bg-bingo2 h-32 bg-center bg-no-repeat" ></div>
            <div className="grid grid-cols-5 text-sm mx-2 mb-2 bg-white ">

              {menuItems.map((item) => (
                <BingoCard key={item.name} item={item} />
              ))}
            </div>
          
          </div>

          <div className=" bg-white border-slate-300 p-5 rounded-lg space-y-1 px-60 max-sm:px-2 max-lg:px-16">
            <h2 className="font-black text-2xl text-center pb-8">
              {" "}
              You can complete your tasks in the links below
            </h2>
            {menuItems.map((item) => (
              <OrderContents item={item} key={item.name} />
            ))}
          </div>
        </div>

    </>
  );
}

export default App;
