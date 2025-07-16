import { useState } from "react";
import { List, Heart, Plus, Search } from "lucide-react";
import { featuredPlaylists } from "../data/mockData";

const Library = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: "All" },
    { id: "playlists", label: "Playlists" },
    { id: "artists", label: "Artists" },
    { id: "albums", label: "Albums" }
  ];

  const libraryItems = [
    {
      type: "liked",
      name: "Liked Songs",
      subtitle: "320 songs",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
    },
    ...featuredPlaylists.map(playlist => ({
      type: "playlist",
      name: playlist.name,
      subtitle: `${playlist.songs.length} songs • ${playlist.createdBy}`,
      image: playlist.imageUrl
    }))
  ];

  const filteredItems = libraryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <List className="text-muted-foreground" size={24} />
          <h1 className="text-2xl font-bold text-foreground">Your Library</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-card-hover rounded-full transition-colors">
            <Search size={16} className="text-muted-foreground" />
          </button>
          <button className="p-2 hover:bg-card-hover rounded-full transition-colors">
            <Plus size={16} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
        <input
          type="text"
          placeholder="Search in Your Library"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-foreground placeholder-muted-foreground pl-10 pr-4 py-2 border-b border-border focus:outline-none focus:border-primary"
        />
      </div>

      {/* View Toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">Recently added</span>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground">
          List
        </button>
      </div>

      {/* Library Items */}
      <div className="space-y-2">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 hover:bg-card-hover rounded-md cursor-pointer group"
          >
            <div className="relative">
              {item.type === "liked" ? (
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md flex items-center justify-center">
                  <Heart className="text-white" size={20} fill="white" />
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-md object-cover"
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground truncate">{item.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No items found</p>
        </div>
      )}
    </div>
  );
};

export default Library;