import { MenuItem } from "../types";

type OrderContentsProps = {
  item: MenuItem;
};

export default function OrderContents({ item }: OrderContentsProps) {
  return (
    <div className=" flex justify-between border-t border-gray-200 last-of-type:border-b items-center">
      <img src={item.img} alt={item.name} className="w-4 h-4" />
      <p className="">{item.name}</p>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-500"
      >
        Go to
      </a>
    </div>
  );
}
