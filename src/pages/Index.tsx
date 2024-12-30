import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AussieBBClient } from "@/services/aussieBBService";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Search, PlusCircle, Globe, Edit2, MapPin, CreditCard, BarChart } from "lucide-react";

const dummyServices = [
  {
    service_id: "12345",
    service_type: "NBN",
    status: "Active",
    address: "12 OVATA PL, INVERLOCH VIC",
    speed_tier: "NBN Fast 100Mbps/20Mbps Unlimited",
    technology_type: "FTTN",
    price: "$95.00",
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
      <Card className="mt-8">
        <CardContent className="space-y-4 p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Aussie Broadband Login</h1>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-4">
            <Button onClick={handleLogin} className="w-full">Login</Button>
            <Button variant="secondary" onClick={handleBypass} className="w-full">
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
        <Input className="pl-10" placeholder="Search Services and Orders" />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl text-gray-600">View, change and edit your active services</h2>
        
        <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <PlusCircle className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="font-semibold">Add a new service</h3>
                <p className="text-sm text-gray-600">Select a plan to add to your account</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">NBN</h2>
        {displayServices?.map((service) => (
          <Card key={service.service_id} className="hover:bg-gray-50 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-gray-500" />
                  <div>
                    <h3 className="font-semibold">NBN</h3>
                    <p className="text-sm text-gray-600">{service.address}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{service.service_id}</span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit Plan
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MapPin className="mr-2 h-4 w-4" />
                    Relocate
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Contract</span>
                    <span>Month-to-month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xl font-bold">{service.price}/month</span>
                    <span className="text-gray-600">Next bill: 25-01-2025</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing and payment
                </Button>

                <div className="space-y-2">
                  <h4 className="font-semibold">Usage</h4>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-gray-500" />
                    <span>{service.usage.current_billing_period.total_downloaded.toFixed(2)}GB used</span>
                    <span className="text-gray-500 ml-auto">Unlimited Data</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: `${Math.min((service.usage.current_billing_period.total_downloaded / 1000) * 100, 100)}%` }}
                    />
                  </div>
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