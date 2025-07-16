import { Play } from "lucide-react";
import { Playlist } from "../data/mockData";

interface PlaylistCardProps {
  playlist: Playlist;
  size?: "small" | "medium" | "large";
}

const PlaylistCard = ({ playlist, size = "medium" }: PlaylistCardProps) => {
  const sizeClasses = {
    small: "w-32",
    medium: "w-48",
    large: "w-56"
  };

  return (
    <div className={`${sizeClasses[size]} bg-card hover:bg-card-hover rounded-lg p-4 transition-all duration-300 group cursor-pointer`}>
      <div className="relative mb-4">
        <img 
          src={playlist.imageUrl} 
          alt={playlist.name}
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button className="absolute bottom-2 right-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Play size={20} />
        </button>
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-1 truncate">
          {playlist.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {playlist.description}
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;