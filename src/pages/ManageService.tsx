import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit2 } from "lucide-react";

const ManageService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceId, speedTier, technologyType } = location.state || {};

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
        <h1 className="text-2xl font-bold">Manage Service</h1>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="font-medium">Service Details</h4>
          <p className="text-sm text-muted-foreground">Service ID: {serviceId}</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Current Plan Details</h4>
          <p className="text-sm text-muted-foreground">{speedTier}</p>
          <p className="text-sm text-muted-foreground">Technology: {technologyType}</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Available Actions</h4>
          <Button className="w-full" variant="outline">Change Speed Tier</Button>
          <Button className="w-full" variant="outline">Relocate Service</Button>
          <Button className="w-full" variant="outline">Request Technical Support</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageService;