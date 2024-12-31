import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2 } from "lucide-react";

interface ManageServiceDialogProps {
  serviceId: string;
  speedTier: string;
  technologyType: string;
}

const ManageServiceDialog = ({ serviceId, speedTier, technologyType }: ManageServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1 hover:bg-sidebar-primary/10 hover:text-sidebar-primary transition-colors duration-200">
          <Edit2 className="mr-2 h-4 w-4" />
          Manage Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Manage Service</DialogTitle>
          <DialogDescription>
            Service ID: {serviceId}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
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
      </DialogContent>
    </Dialog>
  );
};

export default ManageServiceDialog;