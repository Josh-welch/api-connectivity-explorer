import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar />
      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;