// Import necessary modules and types
import Layout from '@components/layout';
import PostGrid from '@components/postgrid';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { ReactElement } from 'react';
import { Post } from 'src/services/types';
// seo
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Head from 'next/head';

function PostPage({ post }: { post: Post }) {
  return <div className='my-12 max-w-6xl mx-auto'>
    <NextSeo
      title={post.title + " - Rotaract Club of Uva Wellassa University - Badulla"}
      description={post.excerpt}
      canonical="https://blog.racuwu.com/"
      openGraph={{
        url: "https://blog.racuwu.com/posts/" + post.slug,
        title: post.title,
        description: post.excerpt,
        images: [{
          url: post.cover_image?.includes("https") ? post.cover_image : "https://blog.racuwu.com/api-backend/storage/app/public/" + post.cover_image,
          alt: post.title,
        }],
        article:{
          publishedTime: post.published_at,
          modifiedTime: post.updated_at,
          authors: [
            post.author?.name ?? "Web Admin"
          ],
          tags: post.meta_keywords.split(","),
          section: "Rotaract Club of Uva Wellassa University - Badulla",
        }
      }}
      twitter={{
        handle: '@racuwu',
        site: '@racuwu',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          property: 'author',
          content: post.author?.name ?? 'Web Admin',
        },
        {
          property: 'keywords',
          content: post.meta_keywords,
        },
        {
          property: 'article:published_time',
          content: post.published_at,
        },
        {
          property: 'article:tag',
          content: post.tags?.map(e => e.name).join(", ") ?? 'Rotaract Club of Uva Wellassa University, Badulla'
        }
      ]}
    />
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="..." />

    </Head>
    <ArticleJsonLd
      useAppDir={false}
      url={"https://blog.racuwu.com/posts/" + post.slug}
      title={post.title}
      type="BlogPosting"
      images={[
        post.cover_image?.includes("https") ? post.cover_image : "https://blog.racuwu.com/api-backend/storage/app/public/" + post.cover_image
      ]}
      datePublished={post.published_at}
      dateModified={post.updated_at}
      authorName={[
        {
          name: post.author?.name ?? 'anonymous',
          url: `https://blog.racuwu.com/authors/${post.author?.slug}`,
        }
      ]}
      publisherName={post.author?.name ?? 'anonymous'}
      publisherLogo="https://www.example.com/photos/logo.jpg"
      description={post.excerpt}
      isAccessibleForFree={true}
    />
    <div className='text-center my-4 flex flex-wrap justify-center gap-2'>
      {post.avenues?.map((tag) => (
        <Link href={`/avenues/${tag.slug}`}><span className='px-3 py-2 text-sm font-semibold text-gray-700 mr-2 hover:border-pink-700 border-b-2 border-white'>{tag.name}</span></Link>
      ))}
    </div>
    <h1 className='text-5xl font-bold text-center' >{post.title}</h1>
    <div className='flex flex-wrap justify-center md:justify-between'>
      <div className="flex items-center justify-center my-8 animate__animated animate__fadeIn">
        <img className="rounded-full w-12 h-12 mr-4" src={post.author?.image ?? 'https://ui-avatars.com/api/?name=' + (post.author?.name ?? 'anonymous')} alt={post.author?.name} />
        <div>
          <p className="text-sm font-bold">{post.author?.name}</p>
          <p className="text-gray-500 text-sm">{post.published_at}</p>
        </div>
      </div>
      <div className='text-center my-4 flex flex-wrap justify-center gap-2'>
        {post.tags?.map((tag) => (
          <Link href={`/tags/${tag.slug}`}><span className='px-3 py-2 text-sm font-semibold text-gray-700 mr-2 '>{tag.name}</span></Link>
        ))}
      </div>
    </div>
    <img src={post.cover_image?.includes("https") ? post.cover_image : "https://blog.racuwu.com/api-backend/storage/app/public/" + post.cover_image} className='w-full rounded-3xl mb-6' />
    <div dangerouslySetInnerHTML={{ __html: post.body }} className=' mx-auto' />

    <div className="social-share-buttons">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=https://racuwu-blog.vercel.app/posts/${post.slug}`} target='_blank' rel='noopener noreferrer' className='mx-2'>
        <i className="fab fa-facebook text-3xl"></i>
      </a>
      <a href={`https://twitter.com/intent/tweet?url=https://racuwu-blog.vercel.app/posts/${post.slug}&text=${encodeURIComponent(post.title)}`} target='_blank' rel='noopener noreferrer' className='mx-2'>
        <i className="fab fa-twitter text-3xl"></i>
      </a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://racuwu-blog.vercel.app/posts/${post.slug}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`} target='_blank' rel='noopener noreferrer' className='mx-2'>
        <i className="fab fa-linkedin text-3xl"></i>
      </a>
    </div>
    <h2 className='text-2xl'>Related Articles</h2>
    <PostGrid tag={post.tags?.map(e => e.id)[1] ?? 0} />
  </div>
}

PostPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    const res = await fetch('https://blog.racuwu.com/api-backend/api/posts/s/' + slug);
    const post = await res.json();

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: {
        post: null,
      },
    };
  }
};

export default PostPage;
