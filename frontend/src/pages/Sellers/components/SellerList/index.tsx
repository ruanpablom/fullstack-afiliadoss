import { Seller } from "@/models/seller";
import { SellerItem } from "../SellerItem";

export interface SellerListProps {
  sellers: Seller[];
}
export function SellerList({ sellers }: SellerListProps): JSX.Element {
  return (
    <ul className="w-full flex flex-col gap-4">
      {sellers.map((seller) => (
        <SellerItem key={seller.id} seller={seller} />
      ))}
    </ul>
  );
}
