
import React from "react";
import ProfileSettings from "@/components/profile/ProfileSettings";
import MobileNavbar from "@/components/layout/MobileNavbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="finance-gradient text-white p-6 pt-10 pb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">Profile</h1>
          <p className="text-white/80 text-sm">Manage your account settings</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-md mx-auto p-4">
        <ProfileSettings />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavbar />
    </div>
  );
};

export default Profile;
