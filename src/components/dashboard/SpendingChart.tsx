
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

type SpendingCategory = {
  name: string;
  value: number;
  color: string;
};

export const SpendingChart = () => {
  // Placeholder data - in a real app this would come from your state/API
  const spendingData: SpendingCategory[] = [
    { name: "Food & Dining", value: 580, color: "#7E69AB" },
    { name: "Housing", value: 800, color: "#9b87f5" },
    { name: "Transportation", value: 220, color: "#6E59A5" },
    { name: "Entertainment", value: 150, color: "#E5DEFF" },
    { name: "Healthcare", value: 100, color: "#4CAF50" }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-gray-600">Monthly Spending</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {spendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend 
                layout="vertical"
                align="right"
                verticalAlign="middle"
                formatter={(value, entry, index) => (
                  <span style={{ color: "#403E43", fontSize: "12px" }}>{value}</span>
                )}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value}`, "Amount"]}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '8px',
                  border: '1px solid #E5DEFF',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;
