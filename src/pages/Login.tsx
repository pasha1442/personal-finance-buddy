
import React from "react";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md mb-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-finance-primary">SmartSpend</h1>
          <p className="text-gray-600">Your Personal Finance Assistant</p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
