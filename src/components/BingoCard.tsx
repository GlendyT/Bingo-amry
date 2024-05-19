import { useState } from "react";
import { MenuItem } from "../types";
import Confetti from "react-dom-confetti";

type MenuItemProps = {
  item: MenuItem,
}

export default function BingoCard({ item }: MenuItemProps) {
  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () => {
    setChangeColor(!changeColor);
  };

  return (
    <>

        <button
          className={`border-2 border-gray-800 px-8 max-sm:px-2 ${changeColor ? 'bg-purple-200 text-purple-900 font-semibold ' : 'bg-white-700'}`}
          onClick={handleClick}
        >
          <p className="text-xs">{item.name}</p>
          <Confetti active={changeColor} config={{ spread: 70, startVelocity: 30, elementCount: 50 }} />
        </button>

    </>
  );
}
