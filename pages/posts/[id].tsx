import { getAllPostIds, getPostData } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import styles from './[id].module.css';
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = params?.id ? await getPostData(params.id) : {};
  return {
    props: {
      postData
    }
  };
};

export default function Post({ postData }: any) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.post}>
        <h1>
          {postData.title}
        </h1>
        <div className={styles.post_subtitle}>
          <span>
            <i> written at: {postData.date}</i>
          </span>
          <span>
            <i>
              tags: {postData.tags.join(', ')}
            </i>
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={styles.post_body} />
      </div>
    </>
  );
};
