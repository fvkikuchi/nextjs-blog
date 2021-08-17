import Head from "next/head";
import Link from "next/link";
import Date_ from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      timestamp: new Date().toISOString(),
      allPostsData,
    },
    revalidate: 10,
  };
}

export default function Home({ allPostsData, timestamp }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          ログ分析勉強会/AWS/Java/農業(千葉)/フリーランス/養命酒/
          アニメと山登りと散歩が好きですが寝るのも好きです。バイクは元ZX12R！なんでもやるのが好きです。好きなお酒は、緑茶ハイ！！好きなタイプは、森美咲(東のエデン)だけどそもそも人が好き。やらない善よりやる偽善で良いと思ってる人。(始まりわね)
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date_ dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <small className={utilStyles.lightText}>Generated at {timestamp}.</small>
    </Layout>
  );
}
