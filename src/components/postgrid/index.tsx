import PostCard from '@components/post';
import { useState, useEffect } from 'react';
import { PostsPaginated } from 'src/services/types';
import { Container } from '..';
export default function PostGrid({ tag }: { tag: number }) {
  const [posts, setPosts] = useState<PostsPaginated>();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://blog.racuwu.com/api-backend/api/tags/posts?tag_id=`+tag);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [tag]);

  return (
    <Container><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:px-8">
    {posts && posts.data.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </div></Container>
  );
}
