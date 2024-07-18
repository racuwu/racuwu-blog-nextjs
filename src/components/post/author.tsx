import Link from "next/link";
import { Author, Post } from "src/services/types";

interface AuthorCardProps {
  author: Author;
}
// https://ui-avatars.com/api/?name=
const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <Link href={`/authors/${author.slug}`}>
    <div className="animate__animated animate__fadeIn hover:bg-gray-50 rounded-lg cursor-pointer">
      <img src={author.image ?? 'https://ui-avatars.com/api/?name='+author.name} alt={author.name} className="w-full object-cover mb-4 rounded-lg" style={{minHeight:'250px',maxHeight:'250px'}} />
      <div className="px-4">
        <h2 className="text-xl font-bold my-4">{author.name}</h2>
        <p className="text-gray-700">{author.bio}</p>
      </div>
    </div>
    </Link>
  );
};

export default AuthorCard;
