import { Card } from "@/components/ui/card";
import { User, MapPin, Mail, Share2, Lock, Edit } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-6">Account Details</h2>
        <Card className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-gray-500" />
              <span className="font-medium">Primary Contact</span>
            </div>
            <span>Joshua Welch</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span className="font-medium">Billing Address</span>
            </div>
            <span>12 OVATA PL INVERLOCH VIC 3996</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-500" />
              <span className="font-medium">Email</span>
            </div>
            <span>josh@welch.id</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Share2 className="h-5 w-5 text-gray-500" />
              <span className="font-medium">Customer number</span>
            </div>
            <span>13999636</span>
          </div>
          <button className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <Lock className="h-5 w-5" />
            <span>Change password</span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <Edit className="h-5 w-5" />
            <span>Edit account details</span>
          </button>
        </Card>
      </section>
    </div>
  );
};

export default Profile;