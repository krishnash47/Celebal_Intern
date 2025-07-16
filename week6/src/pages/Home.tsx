import { featuredPlaylists, recentlyPlayed } from "../data/mockData";
import PlaylistCard from "../components/PlaylistCard";

const Home = () => {
  const timeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const quickAccessPlaylists = featuredPlaylists.slice(0, 6);

  return (
    <div className="p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {timeGreeting()}
        </h1>
      </header>

      {/* Quick Access Grid */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickAccessPlaylists.map((playlist) => (
            <div 
              key={playlist.id}
              className="bg-card hover:bg-card-hover rounded-md flex items-center space-x-4 p-2 group cursor-pointer transition-all duration-300"
            >
              <img 
                src={playlist.imageUrl} 
                alt={playlist.name}
                className="w-16 h-16 rounded-md shadow-md"
              />
              <span className="font-semibold text-foreground truncate">
                {playlist.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Recently played</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {recentlyPlayed.map((album) => (
            <div key={album.id} className="group">
              <div className="bg-card hover:bg-card-hover rounded-lg p-4 transition-all duration-300 cursor-pointer">
                <div className="relative mb-4">
                  <img 
                    src={album.imageUrl} 
                    alt={album.name}
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 truncate">
                    {album.name}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {album.artist}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Made For You */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Made for you</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredPlaylists.slice(0, 5).map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* Popular Playlists */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Popular playlists</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Show all
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;