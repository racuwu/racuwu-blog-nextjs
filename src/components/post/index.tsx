import Link from "next/link";
import { Post } from "src/services/types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
    <div className="animate__animated animate__fadeIn hover:bg-gray-50 rounded-lg cursor-pointer p-2">
      <img src={post.cover_image?.includes("https") ? post.cover_image : "https://blog.racuwu.com/api-backend/storage/app/public/"+post.cover_image} alt={post.title} className="w-full object-cover mb-4 rounded-lg" style={{minHeight:'250px',maxHeight:'250px'}} />
      <div className="px-1">
        <h2 className="text-xl font-bold my-4 text-gray-700">{post.title}</h2>
        <p className="text-gray-700 text-justify">{post.excerpt.slice(0, 200)}...</p>
        <div className="flex items-center my-8">
          {/* <img className="rounded-full w-16 h-16 mr-4" src={post.author?.image ?? 'https://ui-avatars.com/api/?name=' + (post.author?.name ?? 'anonymous')} alt={post.author?.name?? "Anonymous"} /> */}
          <div>
            <p className="text-lg font-bold">{post.author?.name?? "Anonymous"}</p>
            <p className="text-gray-500 text-sm">{new Date(post.published_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PostCard;
