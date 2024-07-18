import { useRouter } from 'next/router';
import Layout from '@components/layout';
import PostCard from '@components/post';
import SearchJumbo from '@components/search-jambo';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { ReactElement } from 'react';
import { PaginatedPosts, Post } from 'src/services/types';

export const getServerSideProps: GetServerSideProps<{ posts: PaginatedPosts }> = async (context:any) => {
  // Extract the slug from context.params
  const { slug } = context.params;

  try {
    // Fetch data using the obtained slug
    const res = await fetch(`https://blog.racuwu.com/api-backend/api/authors/posts/${slug}?per_page=5&page=1&q=${slug}`);
    const posts = await res.json();

    return { props: { posts } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { posts: null } };
  }
};

function Page({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!posts.data) {
    return <p>Error fetching data</p>;
  }

  const author = posts.data[0].author;

  return (
    <div>
      <SearchJumbo title={author?.name+' Posts'} />
      <div className='mt-12'></div>
      {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 px-12 md:px-8'>
        {/* Assuming 'posts' here is the array of posts you receive from the backend */}
        {posts.data.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
