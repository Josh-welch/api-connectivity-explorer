import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreditCard, Receipt, CalendarDays } from "lucide-react";

interface BillingDialogProps {
  serviceId: string;
  monthlyPrice: string;
}

const BillingDialog = ({ serviceId, monthlyPrice }: BillingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1 hover:bg-sidebar-primary/10 hover:text-sidebar-primary transition-colors duration-200">
          <CreditCard className="mr-2 h-4 w-4" />
          Billing
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Billing Information</DialogTitle>
          <DialogDescription>
            Service ID: {serviceId}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
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
      </DialogContent>
    </Dialog>
  );
};

export default BillingDialog;