// Assuming these are the necessary imports
import Layout from '@components/layout'
import PostCard from '@components/post'
import AuthorCard from '@components/post/author'
import SearchJumbo from '@components/search-jambo'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import type { ReactElement } from 'react'
import { Author, AuthorsPaginated, Post } from 'src/services/types'

export const getServerSideProps: GetServerSideProps<{ authors: AuthorsPaginated }> = async (context) => {
  try {
    const res = await fetch('https://blog.racuwu.com/api-backend/api/authors?per_page=25&page=1')
    const authors = await res.json()

    return { props: { authors } }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { props: { authors: null } }
  }
}

function Page({ authors }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!authors.data) {
    return <p>Error fetching data</p>
  }

  return (
    <div>
      <SearchJumbo title={'Authors'}/>
      <div className='mt-12'></div>
      {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 px-12 md:px-8'>
        {authors.data.map((author: Author) => (
          <AuthorCard key={author.id} author={author}/>
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
