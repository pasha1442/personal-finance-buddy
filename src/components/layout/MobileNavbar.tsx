
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, WalletIcon, PlusCircleIcon, BellIcon, UserIcon } from "lucide-react";

export const MobileNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", icon: <HomeIcon size={20} />, label: "Home" },
    { path: "/transactions", icon: <WalletIcon size={20} />, label: "Transactions" },
    { path: "/add-transaction", icon: <PlusCircleIcon size={24} className="text-white" />, label: "" },
    { path: "/notifications", icon: <BellIcon size={20} />, label: "Alerts" },
    { path: "/profile", icon: <UserIcon size={20} />, label: "Profile" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className={`flex flex-col items-center justify-center w-full h-full ${
              isActive(item.path) ? "text-finance-primary" : "text-gray-500"
            }`}
          >
            {item.path === "/add-transaction" ? (
              <div className="rounded-full finance-gradient p-3 -mt-6">
                {item.icon}
              </div>
            ) : (
              <>
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
