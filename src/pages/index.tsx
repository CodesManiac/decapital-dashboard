import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ProfileHeader from '@/components/ProfileHeader';
import ExperienceTabs from '@/components/ExperienceTabs';
import { GetStaticProps } from 'next';
import { Post, User, Experience } from '@/types';
import { useState } from 'react';

interface HomeProps {
  user: User;
  experiences: Experience[];
}

export const getStaticProps: GetStaticProps = async () => {
  const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');

  const user: User = await userRes.json();
  const posts: Post[] = await postsRes.json();

  const experiences: Experience[] = posts.map((post, index) => ({
    id: post.id,
    title: post.title,
    organization: user.company?.name || 'Org Name',
    location: user.address?.city || 'City',
    date: `Oct 202${index}`,
    tags: ['Training', 'Church Singer'],
    program: 'Sarasota Opera Young Artist Program',
  }));

  return {
    props: {
      user,
      experiences,
    },
  };
};

export default function Home({ user, experiences }: HomeProps) {
    const [active, setActive] = useState<string>('Home');
  return (
    <div className="flex min-h-screen md:flex-row flex-col">
      <Sidebar userName={user?.name} active={active} setActive={setActive}/>
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
        {active === 'Home' ? (
            <>
              <ProfileHeader user={user} />
              <ExperienceTabs experiences={experiences} />
            </>
          ) : (
            <div className="grid place-items-center">{active}</div>
          )}
        </div>
      </div>
    </div>
  );
}