
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionsList, { Transaction } from "@/components/transactions/TransactionsList";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { FilterIcon, SearchIcon } from "lucide-react";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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
    },
    {
      id: "6",
      amount: 125.75,
      type: "debit",
      category: "shopping",
      description: "Grocery Shopping",
      date: "Apr 8, 5:15 PM",
      location: "Whole Foods Market"
    },
    {
      id: "7",
      amount: 58.99,
      type: "debit",
      category: "entertainment",
      description: "Movie Tickets",
      date: "Apr 7, 7:30 PM",
      location: "Cinema Complex"
    },
    {
      id: "8",
      amount: 350.00,
      type: "credit",
      category: "income",
      description: "Freelance Payment",
      date: "Apr 5, 10:15 AM"
    }
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    // Apply tab filter
    if (activeTab === "income" && transaction.type !== "credit") return false;
    if (activeTab === "expenses" && transaction.type !== "debit") return false;
    
    // Apply search filter
    if (searchQuery && !transaction.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="finance-gradient text-white p-6 pt-10 pb-14">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">Transactions</h1>
          <p className="text-white/80 text-sm">View and manage your transactions</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 -mt-8">
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search transactions" 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FilterIcon className="h-4 w-4" />
              </Button>
            </div>
            
            {showFilters && (
              <div className="space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium">Filter Options</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">This Week</Button>
                  <Button variant="outline" size="sm" className="text-xs">This Month</Button>
                  <Button variant="outline" size="sm" className="text-xs">Last Month</Button>
                  <Button variant="outline" size="sm" className="text-xs">Custom Range</Button>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="text-xs mr-2">Reset</Button>
                  <Button size="sm" className="text-xs bg-finance-primary">Apply</Button>
                </div>
              </div>
            )}
            
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="income">Income</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="py-3 px-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                      </div>
                      <div className={`font-medium ${
                        transaction.type === "credit" ? "text-finance-success" : "text-finance-danger"
                      }`}>
                        {transaction.type === "credit" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavbar />
    </div>
  );
};

export default Transactions;
