import { ArrowLeft, Bell, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getTitle = (path: string) => {
    switch (path) {
      case '/': return 'Services';
      case '/profile': return 'Profile';
      case '/billing': return 'Billing';
      case '/support': return 'Support';
      default: return 'Aussie Broadband';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-green-700 text-white z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {location.pathname !== '/' && (
            <button onClick={() => navigate(-1)} className="p-1">
              <ArrowLeft className="h-6 w-6" />
            </button>
          )}
          <h1 className="text-xl font-semibold">{getTitle(location.pathname)}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1 relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-1">
            <MessageSquare className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;