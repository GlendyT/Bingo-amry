import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useBingo from "./hooks/useBingo";

function App() {

  const { order, addItem }  = useBingo();

  return (
    <>
      <header className="font-bold text-center bg-gradient-to-r from-purple-300 to-indigo-300 py-5">
        <h1 className="text-center text-4xl font-bolder text-blue-950">
          New Music
        </h1>
      </header>
      <main className="max-w-7xl mx-auto text-center px-14 py-4">
      <h2 className="text-4xl font-black">BINGO</h2>
        <div className="grid grid-cols-5 lg:p-4 text-xs">
          {menuItems.map(item => (
            <MenuItem
            key={item.name}
            item={item}
            addItem={addItem}
            />
          ))}
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents
           order={order}
          />
        </div>
      </main>
    </>
  );
}

export default App;
