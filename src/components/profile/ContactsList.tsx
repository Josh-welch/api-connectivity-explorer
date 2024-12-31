import { Card } from "@/components/ui/card";
import { User, UserPlus, ChevronRight, X, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Contact {
  name: string;
  type: string;
}

interface ContactsListProps {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactsList = ({ contacts, setContacts }: ContactsListProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-2 border-b">
        <h2 className="text-lg font-semibold">Contacts</h2>
      </div>
      <div className="divide-y">
        {contacts.map((contact, index) => (
          <div key={index} className="p-2 flex items-center justify-between hover:bg-accent/50 transition-colors">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">{contact.name}</p>
                <p className="text-xs text-muted-foreground truncate">{contact.type}</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="size-7">
                <X className="h-4 w-4 text-destructive" />
              </Button>
              <Button variant="ghost" size="icon" className="size-7">
                <Edit className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        ))}
        <div className="p-2 flex items-center justify-between hover:bg-accent/50 transition-colors cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded-full bg-primary/10">
              <UserPlus className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">New Contact</p>
              <p className="text-xs text-muted-foreground truncate">Add an authorised contact</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="size-7">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ContactsList;