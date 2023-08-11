import { Transaction } from "@/models/transaction";

export interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({
  transaction,
}: TransactionItemProps): JSX.Element {
  const { date, product, type, value } = transaction;

  return (
    <li className="flex w-full justify-between border border-emerald-400 rounded-lg p-2 items-center">
      <div className="flex flex-col">
        <span className="text-emerald-400">Product: {product}</span>
        <span className="text-emerald-400">Date: {date}</span>
        <span className="text-emerald-400">Type: {type}</span>
      </div>
      <span className="text-emerald-400">
        Value: R${(value / 100).toFixed(2)}
      </span>
    </li>
  );
}
