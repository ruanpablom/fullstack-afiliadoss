import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import { UploadTransactionFileResponse } from "@/models/upload-transacions-file";
import { baseService } from "../base-service";
import { UseUploadTransactionsFileReturn } from "./types";

export function useUploadTransactionsFile(): UseUploadTransactionsFileReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<
    AxiosError<{ message: string; errors: string[] }> | undefined
  >(undefined);

  const uploadTransactionsFile = useCallback(async (file: File) => {
    try {
      setLoading(true);
      setErro(undefined);
      const { data: result } =
        await baseService.post<UploadTransactionFileResponse>(
          "transactions/upload",
          {
            file,
          },
          { headers: { "Content-Type": "multipart/form-data" } },
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

  return [uploadTransactionsFile, { loading, erro }];
}
