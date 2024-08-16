import { ReactElement, useState } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '@components/layout';
import Link from 'next/link';
import Head from 'next/head';
import SearchJumbo from '@components/search-jambo';
import TagList from '@components/tag-list';
import { GetServerSideProps } from 'next';
import { HomeData } from 'src/services/types';
import FeaturedPost from '@components/featured';
import PostGrid from '@components/postgrid';
import { NextSeo } from 'next-seo';

function Page({ homeData }: { homeData: HomeData; }) {
  const [selectedTag, setSelectedTag] = useState<number | null>(homeData.tags[0].id);

  return (
    <>
      <NextSeo
        title="Blog - Rotaract Club of Uva Wellassa University - Badulla"
        description="We are a professional voluntary movement that focuses on six avenues: Community Service, Club Service, Professional Development, International Service, Public"
        canonical="https://read.racuwu.com/"
        openGraph={{
          url: 'https://read.racuwu.com',
          title: 'Blog - Rotaract Club of Uva Wellassa University - Badulla',
          description: 'We are a professional voluntary movement that focuses on six avenues: Community Service, Club Service, Professional Development, International Service, Public'
        }}
      />
      {/* <SearchJumbo title={"Blog"} /> */}
      <div className='mt-12'></div>
      <FeaturedPost post={homeData.featured[0]} />
      <TagList setSelectedTag={tag => setSelectedTag(tag)} tags={homeData.tags} selectedTag={selectedTag} />
      <PostGrid tag={selectedTag ?? 0} />
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://blog.racuwu.com/api-backend/api/home');
  const data: HomeData = await res.json();

  return {
    props: {
      homeData: data,
    },
  };
};
