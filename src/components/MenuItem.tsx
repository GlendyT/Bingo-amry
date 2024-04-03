
import { useState } from "react"
import {  MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,

}

export default function MenuItem({item}: MenuItemProps) {
  const [changeColor, setChangeColor] = useState(false)

  const handleClick = () => {
    setChangeColor(!changeColor)
  }


  return (
    
    <> 
    <button 
    className={`border-2 border-black lg:px-2 md:px-10 md:py-2 hover:bg-purple-300 ${(changeColor === true) ? 'bg-purple-600 text-white ' : 'bg-white-700'}`}
    onClick={handleClick}
    >
    <p className="text-xs">{item.name}</p>
    </button>
   
    </>
  )
}
