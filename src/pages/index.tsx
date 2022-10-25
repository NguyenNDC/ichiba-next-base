import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import useTrans from 'src/hooks/useTrans';
import styles from '../../assets/css/Home.module.css';

const Home: NextPage = ({ posts }: any) => {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <div className="text-3xl font-bold underline">{trans.home.title}</div>
        <div>{trans.home.content}</div>
        <div className="bg-[white] p-10 rounded-xl mt-10">
          {!posts ? (
            <div>not found</div>
          ) : (
            posts.map((v: any, index: any) => <div key={index}>{v.name}</div>)
          )}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const posts = await res.json();
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
    revalidate: 2,
  };
};

export default Home;
