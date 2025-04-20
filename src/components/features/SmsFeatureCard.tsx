
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareIcon, CheckCircleIcon } from "lucide-react";

export const SmsFeatureCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center font-medium text-gray-600">
          <MessageSquareIcon className="h-5 w-5 mr-2 text-finance-accent" />
          SMS Detection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-finance-light p-4 rounded-lg mb-4">
          <p className="text-sm text-finance-text">
            SmartSpend can automatically detect and log transactions from your bank SMS messages.
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-finance-success mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Automatic Transaction Logging</p>
              <p className="text-xs text-gray-500">No need to manually enter every transaction</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-finance-success mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Instant Notifications</p>
              <p className="text-xs text-gray-500">Be alerted as soon as a transaction is detected</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-finance-success mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Smart Categorization</p>
              <p className="text-xs text-gray-500">Transactions are automatically categorized</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmsFeatureCard;
