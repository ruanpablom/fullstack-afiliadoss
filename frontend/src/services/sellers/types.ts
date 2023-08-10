import { AxiosError } from "axios";
import { Seller } from "@/models/seller";

export type UseGetAllSellersReturn = [
  () => Promise<Seller[]>,
  {
    loading: boolean;
    erro: AxiosError<{ message: string; errors: string[] }> | undefined;
  },
];
