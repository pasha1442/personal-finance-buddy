
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data submitted:", data);
    // For now we'll just navigate to the dashboard
    // In a real implementation we would handle authentication
    navigate("/");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-finance-primary">Login to SmartSpend</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              placeholder="your.email@example.com"
              type="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email"
                } 
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <a href="#" className="text-xs text-finance-accent">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full finance-gradient hover:opacity-90 transition-opacity"
          >
            Log In
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="text-sm text-center mt-2">
          Don't have an account?{" "}
          <a onClick={() => navigate("/signup")} className="text-finance-accent cursor-pointer">
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
