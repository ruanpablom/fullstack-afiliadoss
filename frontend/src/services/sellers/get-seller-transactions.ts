import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import { Transaction } from "@/models/transaction";
import { baseService } from "../base-service";
import { UseGetSellerTransactionsReturn } from "./types";

export function useGetSellerTransactions(): UseGetSellerTransactionsReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<
    AxiosError<{ message: string; errors: string[] }> | undefined
  >(undefined);

  const getSellerTransactions = useCallback(async (id: number) => {
    try {
      setLoading(true);
      setErro(undefined);
      const { data: result } = await baseService.get<Transaction[]>(
        `/seller/${id}/transactions`,
      );

      return result;
    } catch (err) {
      const error = err as AxiosError<{ message: string; errors: string[] }>;
      setErro(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return [getSellerTransactions, { loading, erro }];
}
