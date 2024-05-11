import { ChangeEvent } from "react";
import { MenuItem, Link } from "../types";

type OrderContentsProps = {
  item: MenuItem;
};


export default function OrderContents({ item }: OrderContentsProps) {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedURL = e.target.value;
    window.open(selectedURL, "_blank")
  }
  return (
    <div className="flex justify-between border-t border-gray-200 last-of-type:border-b items-center">
      <img src={item.img} alt={item.name} className="w-4 h-4" />
      <p className="">{item.name}</p>
      {typeof item.link === 'string' ? (
        <></>
      ) : Array.isArray(item.link) ? (
        <div>
        <select onChange={handleSelectChange}>
          <option value="">Links</option>
          {item.link.map((link: Link, index: number) => (
            <option key={index} value={link.url}>{link.name}</option>
          ))}
        </select>
        </div>
      ) : null}
    </div>
  );
}
