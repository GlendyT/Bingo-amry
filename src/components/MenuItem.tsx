import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button 
    className="border-2 border-black lg:px-2 md:px-10 md:py-2 hover:bg-purple-300 "
     onClick={() => addItem(item)}
    >
    <p className="text-xs">{item.name}</p>
    </button>
  )
}
