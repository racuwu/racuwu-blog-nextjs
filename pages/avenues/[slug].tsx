import React, { ReactElement } from "react";
import { useRouter } from 'next/router'

import { Header } from "@components/header";
import Layout from "@components/layout";

function Page() {
  const router = useRouter();
  return (
    <div>
      <p>Avenue : {router.query.slug}</p>
    </div>
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