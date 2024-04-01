import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button 
    className="border-2 border-black p-4 hover:bg-purple-300"
     onClick={() => addItem(item)}
    >
    <p>{item.name}</p>
    </button>
  )
}
