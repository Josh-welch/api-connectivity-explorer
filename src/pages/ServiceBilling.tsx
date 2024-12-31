import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard, Receipt, CalendarDays } from "lucide-react";

const ServiceBilling = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceId, monthlyPrice } = location.state || {};

  if (!serviceId) {
    navigate('/');
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="hover:bg-sidebar-primary/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Billing Information</h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="font-medium">Service Details</h4>
          <p className="text-sm text-muted-foreground">Service ID: {serviceId}</p>
        </div>

        <div className="flex items-center justify-between p-4 bg-sidebar-primary/5 rounded-lg">
          <span className="text-sm font-medium">Monthly Charge</span>
          <span className="text-lg font-bold text-sidebar-primary">{monthlyPrice}</span>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Payment Options</h4>
          <Button className="w-full flex items-center justify-center gap-2" variant="outline">
            <CreditCard className="h-4 w-4" />
            Make a Payment
          </Button>
          <Button className="w-full flex items-center justify-center gap-2" variant="outline">
            <Receipt className="h-4 w-4" />
            View Invoices
          </Button>
          <Button className="w-full flex items-center justify-center gap-2" variant="outline">
            <CalendarDays className="h-4 w-4" />
            Setup Auto-Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBilling;