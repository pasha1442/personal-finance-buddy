
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { BellIcon, CreditCardIcon, AlertCircleIcon, PieChartIcon, TrendingUpIcon } from "lucide-react";

type Notification = {
  id: string;
  title: string;
  message: string;
  type: "transaction" | "alert" | "insight" | "tip";
  time: string;
  read: boolean;
};

const Notifications = () => {
  // Placeholder data - in a real app this would come from your state/API
  const notifications: Notification[] = [
    {
      id: "1",
      title: "New Transaction Detected",
      message: "Starbucks Coffee - $4.50 was automatically logged from your SMS.",
      type: "transaction",
      time: "10 minutes ago",
      read: false
    },
    {
      id: "2",
      title: "Unusual Spending Alert",
      message: "Your entertainment spending this month is 35% higher than usual.",
      type: "alert",
      time: "2 hours ago",
      read: false
    },
    {
      id: "3",
      title: "Monthly Insight",
      message: "You've saved $245 more this month compared to last month!",
      type: "insight",
      time: "Yesterday",
      read: true
    },
    {
      id: "4",
      title: "Smart Tip",
      message: "Try the 50/30/20 budget rule: 50% needs, 30% wants, 20% savings.",
      type: "tip",
      time: "2 days ago",
      read: true
    },
    {
      id: "5",
      title: "New Transaction Detected",
      message: "Amazon Purchase - $84.99 was automatically logged from your SMS.",
      type: "transaction",
      time: "3 days ago",
      read: true
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "transaction":
        return <CreditCardIcon className="h-5 w-5 text-finance-primary" />;
      case "alert":
        return <AlertCircleIcon className="h-5 w-5 text-finance-danger" />;
      case "insight":
        return <PieChartIcon className="h-5 w-5 text-finance-info" />;
      case "tip":
        return <TrendingUpIcon className="h-5 w-5 text-finance-success" />;
      default:
        return <BellIcon className="h-5 w-5 text-finance-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="finance-gradient text-white p-6 pt-10 pb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">Notifications</h1>
          <p className="text-white/80 text-sm">Stay updated on your finances</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-md mx-auto p-4">
        <Card className="w-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-gray-600">Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-100">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`py-4 ${notification.read ? 'opacity-75' : ''}`}
                  >
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="font-medium text-sm">{notification.title}</h3>
                          {!notification.read && (
                            <span className="ml-2 h-2 w-2 rounded-full bg-finance-primary"></span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center">
                  <BellIcon className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500">No notifications yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavbar />
    </div>
  );
};

export default Notifications;
