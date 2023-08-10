import { useEffect, useState } from "react";
import { Seller } from "@/models/seller";
import { useGetAllSellers } from "@/services/sellers/get-all-sellers";
import { PageTitle } from "@/components";
import { SellerList } from "./components/SellerList";

export function Sellers(): JSX.Element {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [getAllSellers] = useGetAllSellers();

  useEffect(() => {
    getAllSellers().then((result) => setSellers(result));
  }, [getAllSellers]);

  return (
    <div className="flex flex-col gap-6 w-full">
      <PageTitle>Sellers</PageTitle>
      {sellers.length > 0 ? (
        <SellerList sellers={sellers} />
      ) : (
        "No sellers were created"
      )}
    </div>
  );
}
