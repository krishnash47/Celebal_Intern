import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { featuredPlaylists, mockSongs } from "../data/mockData";
import PlaylistCard from "../components/PlaylistCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const genres = [
    { name: "Pop", color: "bg-pink-500", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
    { name: "Hip-Hop", color: "bg-orange-500", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop" },
    { name: "Rock", color: "bg-red-500", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop" },
    { name: "Latin", color: "bg-yellow-500", image: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=400&h=400&fit=crop" },
    { name: "R&B", color: "bg-purple-500", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=400&fit=crop" },
    { name: "Indie", color: "bg-blue-500", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop" },
    { name: "Country", color: "bg-green-500", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" },
    { name: "Jazz", color: "bg-indigo-500", image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=400&fit=crop" }
  ];

  const filteredSongs = mockSongs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlaylists = featuredPlaylists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Search</h1>
        
        {/* Search Bar */}
        <div className="relative max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-muted text-foreground placeholder-muted-foreground pl-10 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </header>

      {/* Search Results */}
      {searchQuery && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Search Results</h2>
          
          {/* Songs */}
          {filteredSongs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Songs</h3>
              <div className="space-y-2">
                {filteredSongs.map((song) => (
                  <div key={song.id} className="flex items-center space-x-4 p-2 hover:bg-card-hover rounded-md cursor-pointer group">
                    <img src={song.imageUrl} alt={song.title} className="w-12 h-12 rounded-md" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{song.title}</h4>
                      <p className="text-sm text-muted-foreground">{song.artist}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{song.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Playlists */}
          {filteredPlaylists.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Playlists</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredPlaylists.map((playlist) => (
                  <PlaylistCard key={playlist.id} playlist={playlist} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Browse All */}
      {!searchQuery && (
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Browse all</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {genres.map((genre) => (
              <div
                key={genre.name}
                className={`${genre.color} rounded-lg p-4 h-32 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200`}
              >
                <h3 className="text-white font-bold text-lg mb-2">{genre.name}</h3>
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="absolute -bottom-2 -right-2 w-20 h-20 object-cover rounded-md transform rotate-12 opacity-80"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;