import { Card } from "@/components/ui/card";
import { User, MapPin, Mail, Share2, Lock, Edit, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-8">
        <div className="size-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
          <User className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">Joshua Welch</h1>
        <p className="text-muted-foreground">Customer since October 2023</p>
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Account Details</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage your personal information</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2 group">
            <Edit className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Edit Profile
          </Button>
        </div>

        <Card className="overflow-hidden">
          <div className="divide-y">
            <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Primary Contact</p>
                  <p className="text-sm text-muted-foreground">Joshua Welch</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Billing Address</p>
                  <p className="text-sm text-muted-foreground">12 OVATA PL INVERLOCH VIC 3996</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">josh@welch.id</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <Share2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Customer number</p>
                  <p className="text-sm text-muted-foreground">13999636</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-3 border-t bg-accent/30">
            <Button variant="outline" className="w-full justify-start gap-2 group">
              <Lock className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Change password
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Profile;