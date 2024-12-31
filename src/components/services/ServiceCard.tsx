import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin, Wifi, CheckCircle2 } from "lucide-react";
import ManageServiceDialog from "./ManageServiceDialog";
import BillingDialog from "./BillingDialog";

interface ServiceCardProps {
  service: {
    service_id: string;
    service_type: string;
    status: string;
    address: string;
    speed_tier: string;
    technology_type: string;
    monthly_price: string;
    usage?: {
      current_billing_period: {
        total_usage: number;
      };
    };
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-200">
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

          {service.usage && (
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
          )}

          <div className="flex gap-3">
            <ManageServiceDialog 
              serviceId={service.service_id}
              speedTier={service.speed_tier}
              technologyType={service.technology_type}
            />
            <BillingDialog 
              serviceId={service.service_id}
              monthlyPrice={service.monthly_price}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;