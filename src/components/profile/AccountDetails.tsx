import { Card } from "@/components/ui/card";
import { User, MapPin, Mail, Share2 } from "lucide-react";

interface AccountDetailsProps {
  name: string;
  address: string;
  email: string;
  customerNumber: string;
}

const AccountDetails = ({ name, address, email, customerNumber }: AccountDetailsProps) => {
  const details = [
    { icon: <User className="h-4 w-4 text-primary" />, label: "Primary Contact", value: name },
    { icon: <MapPin className="h-4 w-4 text-primary" />, label: "Billing Address", value: address },
    { icon: <Mail className="h-4 w-4 text-primary" />, label: "Email", value: email },
    { icon: <Share2 className="h-4 w-4 text-primary" />, label: "Customer number", value: customerNumber }
  ];

  return (
    <section>
      <Card className="overflow-hidden">
        <div className="p-2 border-b">
          <h2 className="text-lg font-semibold">Account Details</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          {details.map((detail, index) => (
            <div 
              key={index} 
              className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors flex items-center space-x-2"
            >
              <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
                {detail.icon}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{detail.label}</p>
                <p className="text-xs text-muted-foreground truncate">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default AccountDetails;