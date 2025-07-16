import { Heart, Home, Search, List, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const mainNavItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Search", icon: Search, path: "/search" },
    { name: "Your Library", icon: List, path: "/library" },
  ];

  const libraryItems = [
    "Create Playlist",
    "Liked Songs",
    "Your Episodes",
  ];

  const playlists = [
    "My Playlist #1",
    "Discover Weekly",
    "Release Radar",
    "Liked from Radio",
    "Recently Played",
    "Heavy Metal",
    "Jazz Classics",
    "Workout Mix",
  ];

  return (
    <div className="w-64 bg-background-elevated h-full flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Spotify</h1>
      </div>

      {/* Main Navigation */}
      <nav className="px-6 mb-8">
        <ul className="space-y-2">
          {mainNavItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md ${
                    isActive ? "text-foreground bg-muted" : ""
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Library Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Library
          </h2>
          <Plus size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
        </div>
        <ul className="space-y-3">
          {libraryItems.map((item, index) => (
            <li key={index}>
              <button className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center space-x-3">
                {item === "Liked Songs" && <Heart size={16} />}
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Playlists */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="border-t border-border pt-4">
          <ul className="space-y-2">
            {playlists.map((playlist, index) => (
              <li key={index}>
                <button className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left w-full py-1">
                  {playlist}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Install App */}
      <div className="p-6 border-t border-border">
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Install App
        </button>
      </div>
    </div>
  );
};

export default Sidebar;