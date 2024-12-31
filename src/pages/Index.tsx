import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AussieBBClient } from "@/services/aussieBBService";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Search, PlusCircle, Globe, Edit2, MapPin, CreditCard, BarChart, Wifi, CheckCircle2 } from "lucide-react";

const dummyServices = [
  {
    service_id: "12345",
    service_type: "NBN",
    status: "Active",
    address: "12 OVATA PL, INVERLOCH VIC",
    speed_tier: "NBN Fast 100Mbps/20Mbps Unlimited",
    technology_type: "FTTN",
    monthly_price: "$95.00",
    usage: {
      current_billing_period: {
        start_date: "2024-01-01",
        end_date: "2024-01-31",
        total_downloaded: 238.84,
        total_uploaded: 50.75,
        total_usage: 289.59
      }
    }
  }
];

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState<AussieBBClient | null>(null);

  const { data: services, refetch: refetchServices } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      if (!client) return [];
      return client.getServices();
    },
    enabled: !!client,
  });

  const handleLogin = async () => {
    const newClient = new AussieBBClient(username, password);
    const success = await newClient.login();
    if (success) {
      setClient(newClient);
      refetchServices();
      toast.success("Successfully logged in");
    }
  };

  const handleBypass = () => {
    toast.success("Bypassed login with dummy data");
    setClient(new AussieBBClient("dummy", "dummy"));
    refetchServices();
  };

  if (!client) {
    return (
      <Card className="mt-8 transition-all duration-200 hover:shadow-md">
        <CardContent className="space-y-4 p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome to Aussie Broadband</h1>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="transition-all duration-200 hover:border-sidebar-primary focus:border-sidebar-primary"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="transition-all duration-200 hover:border-sidebar-primary focus:border-sidebar-primary"
          />
          <div className="flex gap-4">
            <Button onClick={handleLogin} className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 transition-colors duration-200">
              Login
            </Button>
            <Button 
              variant="outline" 
              onClick={handleBypass} 
              className="w-full border-sidebar-primary text-sidebar-primary hover:bg-sidebar-primary/10 transition-colors duration-200"
            >
              Use Dummy Data
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const displayServices = client?.isDummy ? dummyServices : services;

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input 
          className="pl-10 transition-all duration-200 hover:border-sidebar-primary focus:border-sidebar-primary" 
          placeholder="Search Services and Orders" 
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Your Services</h2>
        
        <Card className="bg-gradient-to-br from-sidebar-primary/5 to-transparent hover:shadow-lg transition-all duration-200 cursor-pointer border-dashed border-2 border-sidebar-primary/30">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sidebar-primary/10 rounded-full">
                <PlusCircle className="h-6 w-6 text-sidebar-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Add a new service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Select a plan to add to your account</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-sidebar-primary hover:bg-sidebar-primary/10">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Wifi className="h-5 w-5 text-sidebar-primary" />
          <h2 className="text-xl font-semibold">NBN Services</h2>
        </div>
        
        {displayServices?.map((service) => (
          <Card key={service.service_id} className="overflow-hidden hover:shadow-lg transition-all duration-200">
            <CardContent className="p-0">
              <div className="bg-sidebar-primary/5 border-b p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <Globe className="h-5 w-5 text-sidebar-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">NBN Service</h3>
                        <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          <CheckCircle2 className="h-3 w-3" /> Active
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{service.service_id}</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-sidebar-primary">{service.monthly_price}<span className="text-sm font-normal">/mo</span></span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Installation Address</span>
                    </div>
                    <p className="font-medium">{service.address}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Wifi className="h-4 w-4" />
                      <span className="text-sm">Plan Details</span>
                    </div>
                    <p className="font-medium">{service.speed_tier}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Monthly Usage</span>
                    <span>{service.usage.current_billing_period.total_usage.toFixed(2)} GB used</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-sidebar-primary rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((service.usage.current_billing_period.total_usage / 1000) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 hover:bg-sidebar-primary/10 hover:text-sidebar-primary transition-colors duration-200">
                    <Edit2 className="mr-2 h-4 w-4" />
                    Manage Plan
                  </Button>
                  <Button variant="outline" className="flex-1 hover:bg-sidebar-primary/10 hover:text-sidebar-primary transition-colors duration-200">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;