
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPinIcon, CheckCircleIcon } from "lucide-react";

export const LocationFeatureCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center font-medium text-gray-600">
          <MapPinIcon className="h-5 w-5 mr-2 text-finance-accent" />
          Geo-Location Tagging
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-finance-light p-4 rounded-lg mb-4">
          <p className="text-sm text-finance-text">
            SmartSpend can automatically tag your transaction location for better expense tracking.
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-finance-success mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Place Recognition</p>
              <p className="text-xs text-gray-500">Identifies stores, restaurants and more</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-finance-success mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Spending Heatmap</p>
              <p className="text-xs text-gray-500">Visualize where you spend the most</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-finance-success mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Location-Based Insights</p>
              <p className="text-xs text-gray-500">Discover spending patterns by area</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationFeatureCard;
