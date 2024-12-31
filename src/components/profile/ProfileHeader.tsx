import { User } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
}

const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  return (
    <div className="text-center space-y-2 mb-6">
      <div className="size-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
        <User className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm text-muted-foreground">Customer since October 2023</p>
    </div>
  );
};

export default ProfileHeader;