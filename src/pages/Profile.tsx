import { Card } from "@/components/ui/card";
import { User, MapPin, Mail, Share2, Lock, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Account Details</h2>
          <Button variant="outline" size="sm" className="gap-2">
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        </div>
        <Card>
          <div className="divide-y">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Primary Contact</span>
              </div>
              <span className="text-muted-foreground ml-11 sm:ml-0">Joshua Welch</span>
            </div>

            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Billing Address</span>
              </div>
              <span className="text-muted-foreground ml-11 sm:ml-0">12 OVATA PL INVERLOCH VIC 3996</span>
            </div>

            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Email</span>
              </div>
              <span className="text-muted-foreground ml-11 sm:ml-0">josh@welch.id</span>
            </div>

            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
                  <Share2 className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Customer number</span>
              </div>
              <span className="text-muted-foreground ml-11 sm:ml-0">13999636</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-3 border-t">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Lock className="h-4 w-4" />
              Change password
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Profile;