import { ArrowLeft, Bell, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getTitle = (path: string) => {
    switch (path) {
      case '/': return 'Welcome';
      case '/profile': return 'Your Profile';
      case '/billing': return 'Billing & Payments';
      case '/support': return 'Help & Support';
      default: return 'Aussie Broadband';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-sidebar-primary text-white z-10 shadow-md transition-all duration-200">
      <div className="flex items-center justify-between p-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          {location.pathname !== '/' && (
            <button 
              onClick={() => navigate(-1)} 
              className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          )}
          <h1 className="text-xl font-semibold">{getTitle(location.pathname)}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;