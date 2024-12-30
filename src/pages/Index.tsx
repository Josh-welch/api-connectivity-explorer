import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AussieBBClient } from "@/services/aussieBBService";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const dummyServices = [
  {
    service_id: "12345",
    service_type: "NBN",
    status: "Active",
    address: "123 Example Street, Melbourne VIC 3000",
    speed_tier: "NBN100",
    technology_type: "FTTP",
    usage: {
      current_billing_period: {
        start_date: "2024-01-01",
        end_date: "2024-01-31",
        total_downloaded: 500.25,
        total_uploaded: 100.75,
        total_usage: 601.00
      }
    }
  },
  {
    service_id: "67890",
    service_type: "NBN",
    status: "Active",
    address: "456 Test Road, Sydney NSW 2000",
    speed_tier: "NBN50",
    technology_type: "HFC",
    usage: {
      current_billing_period: {
        start_date: "2024-01-01",
        end_date: "2024-01-31",
        total_downloaded: 250.50,
        total_uploaded: 50.25,
        total_usage: 300.75
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
    // Force the query to refetch with dummy data
    refetchServices();
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Aussie Broadband Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
              <Button onClick={handleLogin}>Login</Button>
              <Button variant="secondary" onClick={handleBypass}>
                Use Dummy Data
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {(services?.length > 0 || client?.isDummy) && (
        <div className="grid gap-4 md:grid-cols-2">
          {(client?.isDummy ? dummyServices : services).map((service) => (
            <Card key={service.service_id}>
              <CardHeader>
                <CardTitle>Service {service.service_id}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Type:</strong> {service.service_type}</p>
                  <p><strong>Status:</strong> {service.status}</p>
                  <p><strong>Address:</strong> {service.address}</p>
                  <p><strong>Speed:</strong> {service.speed_tier}</p>
                  <p><strong>Technology:</strong> {service.technology_type}</p>
                  {service.usage && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Current Billing Period</h4>
                      <p><strong>Period:</strong> {service.usage.current_billing_period.start_date} to {service.usage.current_billing_period.end_date}</p>
                      <p><strong>Downloaded:</strong> {service.usage.current_billing_period.total_downloaded.toFixed(2)} GB</p>
                      <p><strong>Uploaded:</strong> {service.usage.current_billing_period.total_uploaded.toFixed(2)} GB</p>
                      <p><strong>Total Usage:</strong> {service.usage.current_billing_period.total_usage.toFixed(2)} GB</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;