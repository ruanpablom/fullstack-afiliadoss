import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import { Seller } from "@/models/seller";
import { baseService } from "../base-service";
import { UseGetAllSellersReturn } from "./types";

export function useGetAllSellers(): UseGetAllSellersReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<
    AxiosError<{ message: string; errors: string[] }> | undefined
  >(undefined);

  const getAllSellers = useCallback(async () => {
    try {
      setLoading(true);
      setErro(undefined);
      const { data: result } = await baseService.get<Seller[]>("seller");

      return result;
    } catch (err) {
      const error = err as AxiosError<{ message: string; errors: string[] }>;
      setErro(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return [getAllSellers, { loading, erro }];
}
