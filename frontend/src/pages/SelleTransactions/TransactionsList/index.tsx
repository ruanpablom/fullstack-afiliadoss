import { Transaction } from "@/models/transaction";
import { TransactionItem } from "../TransactionItem";

export interface TransactionListProps {
  transactions: Transaction[];
}
export function TransactionList({
  transactions,
}: TransactionListProps): JSX.Element {
  return (
    <ul className="w-full flex flex-col gap-4">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}
