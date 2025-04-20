
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

type ProfileFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  defaultBank: string;
  language: string;
  smsDetection: boolean;
  locationTracking: boolean;
  notifications: boolean;
  darkMode: boolean;
};

export const ProfileSettings = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: {
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "+1 (555) 123-4567",
      defaultBank: "Bank of America",
      language: "en-US",
      smsDetection: true,
      locationTracking: true,
      notifications: true,
      darkMode: false
    }
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile data submitted:", data);
    // In a real implementation we would update the user's profile
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-finance-primary">Profile Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email"
                  } 
                })}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                {...register("phoneNumber")}
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">App Settings</h3>
            
            <div className="space-y-2">
              <Label htmlFor="defaultBank">Default Bank</Label>
              <Input
                id="defaultBank"
                {...register("defaultBank")}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en-US">
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-US">English (US)</SelectItem>
                  <SelectItem value="en-GB">English (UK)</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Permissions & Features</h3>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="smsDetection">SMS Transaction Detection</Label>
                <p className="text-sm text-gray-500">Automatically detect transactions from SMS</p>
              </div>
              <Switch id="smsDetection" {...register("smsDetection")} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="locationTracking">Location Tracking</Label>
                <p className="text-sm text-gray-500">Tag transactions with your location</p>
              </div>
              <Switch id="locationTracking" {...register("locationTracking")} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Notifications</Label>
                <p className="text-sm text-gray-500">Receive alerts about transactions and insights</p>
              </div>
              <Switch id="notifications" {...register("notifications")} />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="darkMode">Dark Mode</Label>
                <p className="text-sm text-gray-500">Toggle between light and dark theme</p>
              </div>
              <Switch id="darkMode" {...register("darkMode")} />
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button 
              type="submit" 
              className="finance-gradient hover:opacity-90 transition-opacity"
            >
              Save Changes
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                // In a real implementation this would log the user out
                navigate("/login");
              }}
            >
              Log Out
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
