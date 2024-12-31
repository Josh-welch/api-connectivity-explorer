import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Edit2, MapPin, Activity, Wifi, Calendar, CreditCard, BarChart3, AlertTriangle, Wrench, Network } from "lucide-react";

const ManageService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceId, speedTier, technologyType } = location.state || {};

  if (!serviceId) {
    navigate('/');
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white rounded-full shadow-sm">
            <Wifi className="h-6 w-6 text-sidebar-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">NBN</h1>
            <p className="text-sm text-muted-foreground">FTTN: NBN: {serviceId}</p>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Plan details</h2>
        
        <Card className="p-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground">Your plan</h3>
              <div className="space-y-2">
                <p className="font-medium">{speedTier}</p>
                <p className="text-sm text-muted-foreground">{serviceId}</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <Edit2 className="h-4 w-4" />
                  Edit Plan
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Relocate
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground">Contract</h3>
              <div className="space-y-2">
                <p className="font-medium">Month-to-month</p>
                <p className="text-2xl font-bold text-sidebar-primary">$95.00<span className="text-sm font-normal">/month</span></p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Billing and payment
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-muted-foreground">Usage</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span>239.09GB used</span>
                  <span>Unlimited Data</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-sidebar-primary rounded-full w-[45%]" />
                </div>
                <p className="text-sm text-muted-foreground">25 Days remaining</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Detailed usage
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Monitoring</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-sidebar-primary" />
              <h3 className="font-medium">Self Test</h3>
            </div>
            
            <div className="h-32 w-full flex items-center justify-center border rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-16 bg-sidebar-primary rounded-full animate-heartbeat" />
              </div>
              <p className="text-muted-foreground relative">Connection status graph</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Having troubles with your connection?</p>
              <p className="text-sm text-muted-foreground">Running a Self Test can automatically diagnose and fix your connection issues.</p>
            </div>

            <Button className="w-full">Run Self Tests</Button>
          </Card>

          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-between">
              All Service Tests
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Speed Test Results
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Outages
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Faults
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Advanced</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Button variant="outline" className="justify-between">
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4" />
              <span>Boltons</span>
            </div>
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Button>
          <Button variant="outline" className="justify-between">
            <div className="flex items-center gap-2">
              <Network className="h-4 w-4" />
              <span>IP Addresses</span>
            </div>
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ManageService;