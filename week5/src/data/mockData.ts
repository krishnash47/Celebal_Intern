// Mock data for Spotify 2.0 clone

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
  audioUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  songs: Song[];
  createdBy: string;
  isLiked?: boolean;
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  year: number;
  imageUrl: string;
  songs: Song[];
}

export const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '2',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: '2:54',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '3',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '4',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: '5',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'F*CK LOVE 3',
    duration: '2:21',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
  }
];

export const featuredPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'Today\'s Top Hits',
    description: 'The most played songs right now',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    songs: mockSongs.slice(0, 3),
    createdBy: 'Spotify'
  },
  {
    id: '2',
    name: 'RapCaviar',
    description: 'New music from Lil Baby, 21 Savage and more',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    songs: mockSongs.slice(1, 4),
    createdBy: 'Spotify'
  },
  {
    id: '3',
    name: 'All Out 2010s',
    description: 'The biggest songs of the 2010s',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    songs: mockSongs.slice(2, 5),
    createdBy: 'Spotify'
  },
  {
    id: '4',
    name: 'Rock Classics',
    description: 'Rock legends & epic songs',
    imageUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&h=400&fit=crop',
    songs: mockSongs,
    createdBy: 'Spotify'
  },
  {
    id: '5',
    name: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
    songs: mockSongs.slice(0, 4),
    createdBy: 'Spotify'
  },
  {
    id: '6',
    name: 'Viva Latino',
    description: 'Today\'s Latin hits, elevando el volumen',
    imageUrl: 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=400&h=400&fit=crop',
    songs: mockSongs.slice(1, 5),
    createdBy: 'Spotify'
  }
];

export const recentlyPlayed: Album[] = [
  {
    id: '1',
    name: 'After Hours',
    artist: 'The Weeknd',
    year: 2020,
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face',
    songs: [mockSongs[0]]
  },
  {
    id: '2',
    name: 'Fine Line',
    artist: 'Harry Styles',
    year: 2019,
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=400&fit=crop&crop=face',
    songs: [mockSongs[1]]
  },
  {
    id: '3',
    name: 'SOUR',
    artist: 'Olivia Rodrigo',
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    songs: [mockSongs[2]]
  },
  {
    id: '4',
    name: 'Future Nostalgia',
    artist: 'Dua Lipa',
    year: 2020,
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face',
    songs: [mockSongs[3]]
  }
];