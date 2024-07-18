import Layout from '@components/layout'
import SearchJumbo from '@components/search-jambo'
import TagCard from '@components/tag/tag_card'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import type { ReactElement } from 'react'
import { Tag, TagsPaginated } from 'src/services/types'

export const getServerSideProps: GetServerSideProps<{ tags: TagsPaginated }> = async (context) => {
  try {
    const res = await fetch('https://blog.racuwu.com/api-backend/api/tags?per_page=25&page=1') // Adjust the endpoint to fetch tags
    const tags = await res.json()

    return { props: { tags } }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { props: { tags: null } }
  }
}

function Page({ tags }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!tags.data) {
    return <p>Error fetching data</p>
  }

  return (
    <div>
      <SearchJumbo title={'Tags'}/>
      <div className='mt-12'></div>
      {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 px-12 md:px-8'>
        {tags.data.map((tag: Tag) => (
          <TagCard key={tag.id} tag={tag}/>
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
