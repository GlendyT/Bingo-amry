import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl "> Faltante </h2>
      <div className="space-y-3 mt-5 ">
        {order.length === 0 ? (
          <p className="text-center">Aun te falta para completar el BINGO</p>
        ) : (
          order.map((item) => (
            <div key={item.id} className="flex justify-between ">
              <img src={item.img} alt={item.name} className="w-4 h-4" />
              <p className="">{item.name}</p>

              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-purple-500">
                Go to
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
