import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AussieBBClient } from "@/services/aussieBBService";
import { useQuery } from "@tanstack/react-query";

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
    }
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
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </CardContent>
      </Card>

      {services && services.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.service_id}>
              <CardHeader>
                <CardTitle>Service {service.service_id}</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded">
                  {JSON.stringify(service, null, 2)}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;