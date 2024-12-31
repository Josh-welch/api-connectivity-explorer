import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountDetails from "@/components/profile/AccountDetails";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ContactsList from "@/components/profile/ContactsList";
import CommunicationPreferences from "@/components/profile/CommunicationPreferences";
import AppPreferences from "@/components/profile/AppPreferences";
import RatingFeedback from "@/components/profile/RatingFeedback";

const Profile = () => {
  const [contacts, setContacts] = useState([
    { name: "Greg Welch", type: "Other contact" },
    { name: "Callum Welch", type: "Other contact" }
  ]);
  const [smsNotifications, setSmsNotifications] = useState("9am-9pm");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState("OFF");
  const [rating, setRating] = useState(0);

  const accountDetails = {
    name: "Joshua Welch",
    address: "12 OVATA PL INVERLOCH VIC 3996",
    email: "josh@welch.id",
    customerNumber: "13999636"
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <ProfileHeader name={accountDetails.name} />
        
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-6">
            <AccountDetails {...accountDetails} />
            <RatingFeedback 
              rating={rating}
              setRating={setRating}
            />
          </TabsContent>
          
          <TabsContent value="contacts">
            <ContactsList 
              contacts={contacts}
              setContacts={setContacts}
            />
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-6">
            <CommunicationPreferences 
              smsNotifications={smsNotifications}
              setSmsNotifications={setSmsNotifications}
              emailNotifications={emailNotifications}
              setEmailNotifications={setEmailNotifications}
            />
            <AppPreferences 
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;