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
    { icon: <User className="h-5 w-5 text-primary" />, label: "Primary Contact", value: name },
    { icon: <MapPin className="h-5 w-5 text-primary" />, label: "Billing Address", value: address },
    { icon: <Mail className="h-5 w-5 text-primary" />, label: "Email", value: email },
    { icon: <Share2 className="h-5 w-5 text-primary" />, label: "Customer number", value: customerNumber }
  ];

  return (
    <section>
      <Card className="overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Account Details</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {details.map((detail, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors flex flex-col items-center text-center space-y-2"
            >
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/10">
                {detail.icon}
              </div>
              <div>
                <p className="font-medium">{detail.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default AccountDetails;