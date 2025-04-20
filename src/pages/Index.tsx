
import React from "react";
import FinancialSummary from "@/components/dashboard/FinancialSummary";
import SpendingChart from "@/components/dashboard/SpendingChart";
import TransactionsList from "@/components/transactions/TransactionsList";
import SmsFeatureCard from "@/components/features/SmsFeatureCard";
import LocationFeatureCard from "@/components/features/LocationFeatureCard";
import MobileNavbar from "@/components/layout/MobileNavbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="finance-gradient text-white p-6 pt-10 pb-6 rounded-b-3xl shadow-md">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">Welcome to SmartSpend</h1>
          <p className="text-white/80 text-sm">Your Personal Finance Assistant</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-md mx-auto p-4 -mt-4">
        <div className="space-y-6">
          {/* Financial Summary */}
          <FinancialSummary />
          
          {/* Spending Chart */}
          <SpendingChart />
          
          {/* Recent Transactions */}
          <TransactionsList />
          
          {/* Key Features Section */}
          <div className="pt-4">
            <h2 className="text-xl font-bold mb-4 text-finance-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SmsFeatureCard />
              <LocationFeatureCard />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavbar />
    </div>
  );
};

export default Index;
