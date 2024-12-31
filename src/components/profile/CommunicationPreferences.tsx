import { Card } from "@/components/ui/card";
import { MessageSquare, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CommunicationPreferencesProps {
  smsNotifications: string;
  setSmsNotifications: (value: string) => void;
  emailNotifications: boolean;
  setEmailNotifications: (value: boolean) => void;
}

const CommunicationPreferences = ({
  smsNotifications,
  setSmsNotifications,
  emailNotifications,
  setEmailNotifications,
}: CommunicationPreferencesProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-2 border-b">
        <h2 className="text-lg font-semibold">Outage Communications</h2>
      </div>
      <div className="p-2 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">SMS Notifications</p>
              <p className="text-xs text-muted-foreground truncate">Receive SMS updates about outages</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button 
              variant={smsNotifications === "OFF" ? "secondary" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setSmsNotifications("OFF")}
            >
              Off
            </Button>
            <Button 
              variant={smsNotifications === "9am-9pm" ? "secondary" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setSmsNotifications("9am-9pm")}
            >
              9am-9pm
            </Button>
            <Button 
              variant={smsNotifications === "24/7" ? "secondary" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setSmsNotifications("24/7")}
            >
              24/7
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Email Notifications</p>
              <p className="text-xs text-muted-foreground truncate">Receive email updates about outages</p>
            </div>
          </div>
          <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
        </div>
      </div>
    </Card>
  );
};

export default CommunicationPreferences;