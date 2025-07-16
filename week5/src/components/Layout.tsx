import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MusicPlayer from "./MusicPlayer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gradient-background">
          {children}
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Layout;