import DesktopNav from "@/components/desktop-navbar";
import { navBarConfig } from "@/config/nav";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="mx-auto container min-h-screen px-6 lg:px-0">
      <DesktopNav config={navBarConfig.mainNav} />
      {children}
    </div>
  );
}
