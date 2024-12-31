import { Card } from "@/components/ui/card";
import { User, MapPin, Mail, Share2, Lock, Edit, ChevronRight, Check, X, UserPlus, MessageSquare, Star, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const Profile = () => {
  const [editMode, setEditMode] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "Joshua Welch",
    address: "12 OVATA PL INVERLOCH VIC 3996",
    email: "josh@welch.id",
    customerNumber: "13999636"
  });
  const [tempData, setTempData] = useState({...formData});
  const [contacts, setContacts] = useState([
    { name: "Greg Welch", type: "Other contact" },
    { name: "Callum Welch", type: "Other contact" }
  ]);
  const [smsNotifications, setSmsNotifications] = useState("9am-9pm");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState("OFF");
  const [rating, setRating] = useState(0);

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
    <div className="space-y-8 max-w-3xl mx-auto pb-8">
      <div className="text-center space-y-3 mb-8">
        <div className="size-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
          <User className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">{formData.name}</h1>
        <p className="text-muted-foreground">Customer since October 2023</p>
      </div>

      <section>
        <Card className="overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Account Details</h2>
          </div>
          <div className="divide-y">
            {renderField("name", <User className="h-5 w-5 text-primary" />, "Primary Contact")}
            {renderField("address", <MapPin className="h-5 w-5 text-primary" />, "Billing Address")}
            {renderField("email", <Mail className="h-5 w-5 text-primary" />, "Email")}
            {renderField("customerNumber", <Share2 className="h-5 w-5 text-primary" />, "Customer number")}
          </div>
        </Card>
      </section>

      <section>
        <Card className="overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Contacts</h2>
          </div>
          <div className="divide-y">
            {contacts.map((contact, index) => (
              <div key={index} className="p-4 sm:p-6 flex items-center justify-between hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.type}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="size-8">
                    <X className="h-4 w-4 text-destructive" />
                  </Button>
                  <Button variant="ghost" size="icon" className="size-8">
                    <Edit className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-accent/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <UserPlus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">New Contact</p>
                  <p className="text-sm text-muted-foreground">Add an authorised contact</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="size-8">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card className="overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Outage Communications Preferences</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive SMS updates about outages</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Button 
                  variant={smsNotifications === "OFF" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSmsNotifications("OFF")}
                >
                  Off
                </Button>
                <Button 
                  variant={smsNotifications === "9am-9pm" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSmsNotifications("9am-9pm")}
                >
                  9am-9pm
                </Button>
                <Button 
                  variant={smsNotifications === "24/7" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSmsNotifications("24/7")}
                >
                  24/7
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive email updates about outages</p>
                </div>
              </div>
              <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card className="overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">App Preferences</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                  <Moon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Adjust the appearance of the app</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={darkMode === "ON" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setDarkMode("ON")}
                >
                  On
                </Button>
                <Button 
                  variant={darkMode === "AUTO" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setDarkMode("AUTO")}
                >
                  Auto
                </Button>
                <Button 
                  variant={darkMode === "OFF" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setDarkMode("OFF")}
                >
                  Off
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card className="overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Rating & Feedback</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="font-medium">How are you enjoying our app?</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant="ghost"
                  size="icon"
                  onClick={() => setRating(star)}
                  className="size-10"
                >
                  <Star 
                    className={`h-6 w-6 ${rating >= star ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                  />
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Leave us some feedback so we can continue to improve our app experience.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Profile;