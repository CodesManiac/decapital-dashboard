import { Post, User } from "@/types";
import ExperienceTabs from "./components/ExperienceTabs";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Sidebar from "./components/Sidebar";


async function getUserData(): Promise<{ user: User; posts: Post[] }>{
  const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store',
  });
  const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1', {
    cache: 'no-store',
  });

  const user = await userRes.json();
  const posts = await postsRes.json();

  return { user, posts };
}
export default async function Home() {
  const { user, posts } = await getUserData();
  console.log(posts,"posts")
  console.log(user,"user");
  const experiences = posts.slice(0, 5).map((post, index) => ({
    id: post.id,
    title: post.title,
    organization: user.company?.name || 'Org Name',
    location: user.address?.city || 'City',
    date: `202${index}`,
    tags: ['Training', 'Church Singer'],
  }));
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
