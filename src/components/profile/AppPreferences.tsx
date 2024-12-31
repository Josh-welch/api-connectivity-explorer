import { Card } from "@/components/ui/card";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppPreferencesProps {
  darkMode: string;
  setDarkMode: (value: string) => void;
}

const AppPreferences = ({ darkMode, setDarkMode }: AppPreferencesProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-2 border-b">
        <h2 className="text-lg font-semibold">App Preferences</h2>
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
              <Moon className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Dark Mode</p>
              <p className="text-xs text-muted-foreground truncate">Adjust the appearance of the app</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button 
              variant={darkMode === "ON" ? "secondary" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setDarkMode("ON")}
            >
              On
            </Button>
            <Button 
              variant={darkMode === "AUTO" ? "secondary" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setDarkMode("AUTO")}
            >
              Auto
            </Button>
            <Button 
              variant={darkMode === "OFF" ? "secondary" : "ghost"}
              size="sm"
              className="text-xs"
              onClick={() => setDarkMode("OFF")}
            >
              Off
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AppPreferences;