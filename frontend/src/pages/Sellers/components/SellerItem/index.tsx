import { NavLink } from "react-router-dom";
import { Seller } from "@/models/seller";

export interface SellerItemProps {
  seller: Seller;
}

export function SellerItem({ seller }: SellerItemProps): JSX.Element {
  const { id, name } = seller;

  return (
    <li className="flex w-full justify-between border border-emerald-400 rounded-lg p-2 items-center">
      <span className="text-emerald-400">{name}</span>
      <NavLink
        className="px-2 py-1 bg-indigo-500 hover:bg-indigo-400 text-slate-900 rounded-lg font-semibold"
        to={`/seller/${id}/transactions`}
      >
        TRANSACTIONS
      </NavLink>
    </li>
  );
}
