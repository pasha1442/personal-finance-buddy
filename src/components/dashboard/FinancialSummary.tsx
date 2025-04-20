
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

export const FinancialSummary = () => {
  // Placeholder data - in a real app this would come from your state/API
  const financialData = {
    balance: 4580.75,
    income: 3200,
    expenses: 1850.25,
    savingsRate: (3200 - 1850.25) / 3200 * 100
  };

  return (
    <div className="w-full space-y-4">
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium text-gray-600">Current Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">${financialData.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
          <p className="text-sm text-gray-500 mt-1">April 2025</p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Income</p>
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <ArrowUpIcon className="h-4 w-4 text-finance-success" />
              </div>
            </div>
            <p className="text-xl font-semibold mt-2">${financialData.income.toLocaleString()}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Expenses</p>
              <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                <ArrowDownIcon className="h-4 w-4 text-finance-danger" />
              </div>
            </div>
            <p className="text-xl font-semibold mt-2">${financialData.expenses.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Savings Rate</p>
            <p className="text-sm font-medium text-finance-success">{financialData.savingsRate.toFixed(1)}%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-finance-primary h-2.5 rounded-full" style={{ width: `${financialData.savingsRate}%` }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialSummary;
