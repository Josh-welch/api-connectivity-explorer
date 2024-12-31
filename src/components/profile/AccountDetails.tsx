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
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Account Details</h2>
        </div>
        <div className="divide-y">
          {details.map((detail, index) => (
            <div 
              key={index} 
              className="p-4 sm:p-6 flex items-center gap-3 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                {detail.icon}
              </div>
              <div>
                <p className="font-medium">{detail.label}</p>
                <p className="text-sm text-muted-foreground">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default AccountDetails;