
import React from "react";
import TransactionForm from "@/components/transactions/TransactionForm";
import MobileNavbar from "@/components/layout/MobileNavbar";

const AddTransaction = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="finance-gradient text-white p-6 pt-10 pb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">Add Transaction</h1>
          <p className="text-white/80 text-sm">Record your income or expenses</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-md mx-auto p-4 -mt-4">
        <TransactionForm />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavbar />
    </div>
  );
};

export default AddTransaction;
