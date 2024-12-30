import { Card } from "@/components/ui/card";
import { CreditCard, MessageSquare } from "lucide-react";

const Billing = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <span className="text-3xl font-bold">$95.00</span>
          <p className="text-gray-600">Current Owing Balance</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5" />
              <div>
                <p className="font-medium">521729XXXXXX3692</p>
                <p className="text-sm text-gray-600">Exp. 01/27</p>
              </div>
            </div>
            <button className="text-green-700 font-medium">Edit</button>
          </div>
          
          <button className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <CreditCard className="h-5 w-5" />
            <span>Make a payment</span>
          </button>
          
          <button className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
            <MessageSquare className="h-5 w-5" />
            <span>Request a payment extension</span>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Billing;