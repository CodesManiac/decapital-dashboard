import ExperienceTabs from "./components/ExperienceTabs";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <div className="p-6">
        <ProfileHeader  />
        <ExperienceTabs />
      </div>
    </div>
  </div>
  );
}
