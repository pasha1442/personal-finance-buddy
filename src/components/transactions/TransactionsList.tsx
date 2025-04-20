
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WalletIcon, ShoppingCartIcon, HomeIcon, CoffeeIcon, Car } from "lucide-react";
import { cn } from "@/lib/utils";

export type Transaction = {
  id: string;
  amount: number;
  type: "credit" | "debit";
  category: string;
  description: string;
  date: string;
  location?: string;
};

type TransactionItemProps = {
  transaction: Transaction;
};

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "shopping":
      return <ShoppingCartIcon className="h-4 w-4" />;
    case "housing":
      return <HomeIcon className="h-4 w-4" />;
    case "food":
      return <CoffeeIcon className="h-4 w-4" />;
    case "transportation":
      return <Car className="h-4 w-4" />;
    default:
      return <WalletIcon className="h-4 w-4" />;
  }
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0">
      <div className="flex items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center mr-3",
          transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
        )}>
          {getCategoryIcon(transaction.category)}
        </div>
        <div>
          <p className="text-sm font-medium">{transaction.description}</p>
          <p className="text-xs text-gray-500">{transaction.date} {transaction.location && `• ${transaction.location}`}</p>
        </div>
      </div>
      <div className={cn(
        "font-medium",
        transaction.type === "credit" ? "text-finance-success" : "text-finance-danger"
      )}>
        {transaction.type === "credit" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
      </div>
    </div>
  );
};

export const TransactionsList = () => {
  // Placeholder data - in a real app this would come from your state/API
  const transactions: Transaction[] = [
    {
      id: "1",
      amount: 42.50,
      type: "debit",
      category: "food",
      description: "Starbucks Coffee",
      date: "Today, 10:23 AM",
      location: "Main Street"
    },
    {
      id: "2",
      amount: 1200.00,
      type: "credit",
      category: "income",
      description: "Salary Deposit",
      date: "Apr 15, 09:45 AM"
    },
    {
      id: "3",
      amount: 84.99,
      type: "debit",
      category: "shopping",
      description: "Amazon Purchase",
      date: "Apr 14, 2:30 PM"
    },
    {
      id: "4",
      amount: 35.00,
      type: "debit",
      category: "transportation",
      description: "Uber Ride",
      date: "Apr 13, 7:15 PM",
      location: "Downtown"
    },
    {
      id: "5",
      amount: 650.00,
      type: "debit",
      category: "housing",
      description: "Rent Payment",
      date: "Apr 10, 9:00 AM"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium text-gray-600">Recent Transactions</CardTitle>
        <a href="/transactions" className="text-sm text-finance-accent">
          View All
        </a>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-gray-100">
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsList;
