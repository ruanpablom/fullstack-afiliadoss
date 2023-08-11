import { AxiosError } from "axios";
import { Seller } from "@/models/seller";
import { Transaction } from "@/models/transaction";

export type UseGetAllSellersReturn = [
  () => Promise<Seller[]>,
  {
    loading: boolean;
    erro: AxiosError<{ message: string; errors: string[] }> | undefined;
  },
];

export type UseGetSellerTransactionsReturn = [
  (id: number) => Promise<Transaction[]>,
  {
    loading: boolean;
    erro: AxiosError<{ message: string; errors: string[] }> | undefined;
  },
];
