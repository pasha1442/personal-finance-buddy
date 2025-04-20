
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignupForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupFormData>();
  const password = watch("password", "");

  const onSubmit = (data: SignupFormData) => {
    console.log("Signup data submitted:", data);
    // For now we'll just navigate to the dashboard
    // In a real implementation we would handle authentication
    navigate("/");
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-finance-primary">Create Account</CardTitle>
        <CardDescription className="text-center">
          Sign up for SmartSpend to start tracking your finances
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          
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
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                } 
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword", { 
                required: "Please confirm your password",
                validate: value => value === password || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full finance-gradient hover:opacity-90 transition-opacity"
          >
            Create Account
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="text-sm text-center mt-2">
          Already have an account?{" "}
          <a onClick={() => navigate("/login")} className="text-finance-accent cursor-pointer">
            Log in
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
