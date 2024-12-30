import { Home, User, CreditCard, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white dark:bg-gray-900 shadow-lg transition-all duration-200">
      <nav className="flex justify-around p-2 max-w-4xl mx-auto">
        <Link 
          to="/" 
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
            isActive('/') 
              ? 'text-sidebar-primary scale-105' 
              : 'text-gray-600 dark:text-gray-400 hover:text-sidebar-primary hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Home</span>
        </Link>
        <Link 
          to="/profile" 
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
            isActive('/profile') 
              ? 'text-sidebar-primary scale-105' 
              : 'text-gray-600 dark:text-gray-400 hover:text-sidebar-primary hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Profile</span>
        </Link>
        <Link 
          to="/billing" 
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
            isActive('/billing') 
              ? 'text-sidebar-primary scale-105' 
              : 'text-gray-600 dark:text-gray-400 hover:text-sidebar-primary hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          <CreditCard className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Billing</span>
        </Link>
        <Link 
          to="/support" 
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
            isActive('/support') 
              ? 'text-sidebar-primary scale-105' 
              : 'text-gray-600 dark:text-gray-400 hover:text-sidebar-primary hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          <HelpCircle className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Support</span>
        </Link>
      </nav>
    </div>
  );
};

export default BottomNav;