import Link from "next/link";
import { Post } from "src/services/types";

export default function FeaturedPost({ post }: { post: Post }) {
    return <Link href={`/posts/${post.slug}`}>

        <div className="border-2 md:border-0 mt-8 md:mt-0 hover:bg-gray-50 p-4 rounded-lg cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 animate__animated animate__fadeInLeft">
                    <img className="rounded-2xl" src={post.cover_image?.includes("https") ? post.cover_image : "https://blog.racuwu.com/api-backend/storage/app/public/" + post.cover_image} alt={post.title} />
                </div>
                <div className="p-4">
                    <Link href={`/tags/${post.tags && post.tags[0].name}`}><h2 className="text-xl my-1 md:my-4 text-pink-700 animate__animated animate__fadeIn">{post.tags && post.tags[0].name}</h2></Link>
                    <h1 className="text-4xl font-bold my-4 animate__animated animate__fadeInUp">{post.title}</h1>
                    <p className="text-gray-500 w-5/6 animate__animated animate__fadeInDown text-justify mt-2" dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                    <div className="flex items-center my-8 animate__animated animate__fadeIn">
                        {/* <Link href={`/posts/${post.slug}`}><button className="bg-pink-700 text-white px-4 py-2 rounded-lg mt-4 animate__animated animate__bounceIn">Read Full Story</button></Link> */}
                        <div className="flex items-center animate__animated animate__fadeIn">
                            {/* <img className="rounded-full w-16 h-16 mr-4" src={post.author?.image ?? 'https://ui-avatars.com/api/?name=' + (post.author?.name ?? 'anonymous')} alt={post.author?.name} /> */}
                            <div>
                                <p className="text-lg font-bold">{post.author?.name}</p>
                                <p className="text-gray-500 text-sm">{new Date(post.published_at).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
}