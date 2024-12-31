import { User } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
}

const ProfileHeader = ({ name }: ProfileHeaderProps) => {
  return (
    <div className="text-center space-y-2 mb-4">
      <div className="size-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
        <User className="h-8 w-8 text-primary" />
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-xs text-muted-foreground">Customer since October 2023</p>
    </div>
  );
};

export default ProfileHeader;