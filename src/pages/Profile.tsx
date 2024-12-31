import { useState } from "react";
import { toast } from "sonner";
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
    <div className="space-y-4 max-w-2xl mx-auto pb-8">
      <ProfileHeader name={accountDetails.name} />
      
      <AccountDetails {...accountDetails} />
      
      <ContactsList 
        contacts={contacts}
        setContacts={setContacts}
      />
      
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
      
      <RatingFeedback 
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
};

export default Profile;