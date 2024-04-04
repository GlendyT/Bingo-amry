
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";


function App() {



  return (
    <>
    <div className="min-h-screen sm:justify-center items-center "> 
      <div className="font-bold text-center bg-gradient-to-r from-purple-300 to-indigo-300 py-5">
        <h1 className="text-center text-4xl font-bolder text-blue-950 sm:text-xs md:text-sm">
          New Music
        </h1>
        <h2 className="text-4xl font-black">BINGO</h2>
        <h1>Mark what you have already completed</h1>
      </div>
      <div className=" mr-6 ml-6">
        <div className="grid grid-cols-5 text-xs lg:px-64 md:px-46 sm:px-2 ">
          {menuItems.map(item => (
            <MenuItem
            key={item.name}
            item={item}  
            />
          ))}
        </div> 
        
        <div className=" bg-white border-slate-300 p-5 rounded-lg space-y-1">
        <h2 className="font-black text-2xl text-center "> You can complete your tasks in the links  below</h2>
          {menuItems.map(item => (
             <OrderContents
            item={item} 
            key={item.name}

          />         
          ))}
        </div>
        
      </div>
      </div>
    </>
  );
}

export default App;



