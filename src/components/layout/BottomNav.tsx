import { Home, User, CreditCard, HelpCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white dark:bg-gray-900">
      <nav className="flex justify-around p-2">
        <Link to="/" className={`flex flex-col items-center p-2 ${isActive('/') ? 'text-green-700 dark:text-green-500' : 'text-gray-600 dark:text-gray-400'}`}>
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center p-2 ${isActive('/profile') ? 'text-green-700 dark:text-green-500' : 'text-gray-600 dark:text-gray-400'}`}>
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link to="/billing" className={`flex flex-col items-center p-2 ${isActive('/billing') ? 'text-green-700 dark:text-green-500' : 'text-gray-600 dark:text-gray-400'}`}>
          <CreditCard className="h-6 w-6" />
          <span className="text-xs mt-1">Billing</span>
        </Link>
        <Link to="/support" className={`flex flex-col items-center p-2 ${isActive('/support') ? 'text-green-700 dark:text-green-500' : 'text-gray-600 dark:text-gray-400'}`}>
          <HelpCircle className="h-6 w-6" />
          <span className="text-xs mt-1">Support</span>
        </Link>
      </nav>
    </div>
  );
};

export default BottomNav;