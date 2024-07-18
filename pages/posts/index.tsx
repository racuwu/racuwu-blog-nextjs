// Assuming these are the necessary imports
import Layout from '@components/layout'
import PostCard from '@components/post'
import SearchJumbo from '@components/search-jambo'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import type { ReactElement } from 'react'
import { PaginatedPosts, Post } from 'src/services/types'

export const getServerSideProps: GetServerSideProps<{ posts: PaginatedPosts }> = async (context) => {
  try {
    const res = await fetch('https://blog.racuwu.com/api-backend/api/posts?per_page=10&page=1')
    const posts = await res.json()

    return { props: { posts } }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { props: { posts: null } }
  }
}

function Page({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!posts.data) {
    return <p>Error fetching data</p>
  }

  return (
    <div>
      <SearchJumbo title={'Posts'}/>
      <div className='mt-12'></div>
      {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 px-12 md:px-8'>
        {posts.data.map((post: Post) => (
          <PostCard key={post.id} post={post}/>
        ))}
        </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page
