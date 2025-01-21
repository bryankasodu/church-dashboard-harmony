import { Link, useLocation } from "react-router-dom";
import { Home, Users, Calendar } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Users, label: "Members", path: "/members" },
    { icon: Calendar, label: "Events", path: "/events" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 space-y-8">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-primary rounded-lg" />
        <h1 className="text-xl font-semibold">Church Manager</h1>
      </div>
      
      <nav className="space-y-2">
        {links.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
              location.pathname === path
                ? "bg-primary/10 text-primary"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;