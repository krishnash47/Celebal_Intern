import { useState } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Volume2,
  Heart
} from "lucide-react";
import { mockSongs } from "../data/mockData";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutes in seconds
  const [volume, setVolume] = useState(75);
  const [isLiked, setIsLiked] = useState(false);

  const currentSong = mockSongs[0]; // Default to first song

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="h-20 bg-background-elevated border-t border-border flex items-center justify-between px-4">
      {/* Currently Playing */}
      <div className="flex items-center space-x-3 w-80">
        <img 
          src={currentSong.imageUrl} 
          alt={currentSong.title}
          className="w-12 h-12 rounded-md"
        />
        <div className="min-w-0">
          <h4 className="text-sm font-medium text-foreground truncate">
            {currentSong.title}
          </h4>
          <p className="text-xs text-muted-foreground truncate">
            {currentSong.artist}
          </p>
        </div>
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="ml-2"
        >
          <Heart 
            size={16} 
            className={`${isLiked ? 'fill-primary text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center space-y-2 flex-1 max-w-md">
        {/* Control Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-muted-foreground hover:text-foreground">
            <Shuffle size={16} />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full p-2 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipForward size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Repeat size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-2 w-full">
          <span className="text-xs text-muted-foreground w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <div className="flex-1 bg-muted rounded-full h-1 relative group cursor-pointer">
            <div 
              className="bg-primary h-1 rounded-full relative"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-xs text-muted-foreground w-10">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2 w-32">
        <Volume2 size={16} className="text-muted-foreground" />
        <div className="flex-1 bg-muted rounded-full h-1 relative group cursor-pointer">
          <div 
            className="bg-primary h-1 rounded-full relative"
            style={{ width: `${volume}%` }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;