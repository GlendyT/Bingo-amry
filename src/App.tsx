import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useBingo from "./hooks/useBingo";

function App() {

  const { order, addItem }  = useBingo();

  return (
    <>
    <div className="min-h-screen sm:justify-center items-center "> 
      <div className="font-bold text-center bg-gradient-to-r from-purple-300 to-indigo-300 py-5">
        <h1 className="text-center text-4xl font-bolder text-blue-950 sm:text-xs md:text-sm">
          New Music
        </h1>
        <h2 className="text-4xl font-black">BINGO</h2>
      </div>
      <div className="mt-6 mr-6 ml-6">
        <div className="grid grid-cols-5 text-xs lg:px-64 md:px-46 sm:px-2 ">
          {menuItems.map(item => (
            <MenuItem
            key={item.name}
            item={item}
            addItem={addItem}
            />
          ))}
        </div>
        <div className="border border-dashed bg-white border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
           order={order}
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;

/* */
