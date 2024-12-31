import { Card } from "@/components/ui/card";
import { User, MapPin, Mail, Share2, Lock, Edit, ChevronRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Profile = () => {
  const [editMode, setEditMode] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "Joshua Welch",
    address: "12 OVATA PL INVERLOCH VIC 3996",
    email: "josh@welch.id",
    customerNumber: "13999636"
  });
  const [tempData, setTempData] = useState({...formData});

  const handleEdit = (field: string) => {
    setEditMode(field);
    setTempData({...formData});
  };

  const handleSave = (field: string) => {
    setFormData({...formData, [field]: tempData[field as keyof typeof tempData]});
    setEditMode(null);
    toast.success("Details updated successfully");
  };

  const handleCancel = () => {
    setEditMode(null);
    setTempData({...formData});
  };

  const renderField = (
    field: keyof typeof formData,
    icon: React.ReactNode,
    label: string
  ) => {
    const isEditing = editMode === field;
    
    return (
      <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-accent/50 transition-colors group">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
            {icon}
          </div>
          <div className="flex-1">
            <p className="font-medium">{label}</p>
            {isEditing ? (
              <Input
                value={tempData[field]}
                onChange={(e) => setTempData({...tempData, [field]: e.target.value})}
                className="mt-1"
                autoFocus
              />
            ) : (
              <p className="text-sm text-muted-foreground">{formData[field]}</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCancel}
                className="size-8"
              >
                <X className="h-4 w-4 text-destructive" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSave(field)}
                className="size-8"
              >
                <Check className="h-4 w-4 text-primary" />
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleEdit(field)}
              className="size-8 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Edit className="h-4 w-4 text-muted-foreground" />
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-3 mb-8">
        <div className="size-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
          <User className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">{formData.name}</h1>
        <p className="text-muted-foreground">Customer since October 2023</p>
      </div>

      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Account Details</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your personal information
            </p>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="divide-y">
            {renderField("name", <User className="h-5 w-5 text-primary" />, "Primary Contact")}
            {renderField("address", <MapPin className="h-5 w-5 text-primary" />, "Billing Address")}
            {renderField("email", <Mail className="h-5 w-5 text-primary" />, "Email")}
            {renderField("customerNumber", <Share2 className="h-5 w-5 text-primary" />, "Customer number")}
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