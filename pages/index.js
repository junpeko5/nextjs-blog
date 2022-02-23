import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          ソフトウェアエンジニア。1989年生まれ大阪府岸和田市在住のフリーランス。PHP、バックエンド開発が得意。テニス、フットサル、だんじり、ケツメイシ、競馬、プログラミングが好き！最近はWebフロントエンド沼にハマってます！
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
