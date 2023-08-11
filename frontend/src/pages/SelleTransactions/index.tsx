import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Transaction } from "@/models/transaction";
import { useGetSellerTransactions } from "@/services/sellers/get-seller-transactions";
import { PageTitle } from "@/components";
import { TransactionTypes } from "@/enums/transaction-type";
import { TransactionList } from "./TransactionsList";

export function SellerTransactions(): JSX.Element {
  const { id } = useParams();
  const [getSellerTransactions] = useGetSellerTransactions();
  const [sellerTransactions, setSellerTransactions] = useState<Transaction[]>(
    [],
  );
  const location = useLocation();

  const total = useMemo(() => {
    return sellerTransactions
      .reduce((acc, transaction) => {
        const value = transaction.value / 100;
        return (
          acc +
          (transaction.type === TransactionTypes.PaidComission ? -value : value)
        );
      }, 0)
      .toFixed(2);
  }, [sellerTransactions]);

  useEffect(() => {
    getSellerTransactions(Number(id)).then((result) =>
      setSellerTransactions(result),
    );
  }, [getSellerTransactions, id]);

  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <PageTitle>{location.state.name} Transactions</PageTitle>
      {sellerTransactions.length > 0 ? (
        <TransactionList transactions={sellerTransactions} />
      ) : (
        "No transactions for this seller"
      )}
      <span className="text-emerald-400">Total: R${total}</span>
    </div>
  );
}
