// import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/utils.module.css';
import cls from '@/lib/utils/cls';
import Link from 'next/link';
import TypeMachine from '@/components/TypeMachine';
import { PostData, getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';


export const getStaticProps:GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

type HomeProps = {
  allPostsData: PostData[]
}

export default function Home({ allPostsData }: HomeProps) {
  console.log(allPostsData);
  return (
    <main className={styles.main}>
      <div>

        <Link href={'/'}>
          <TypeMachine>
            {/* TODO: support <a>: extract the string  */}
            Hello, Welcome to my blog. You can visit
            <Link href={'/posts/test-post'}>First Post</Link>
            or visit my
            <Link href={'/projects'}>Projects</Link>
          </TypeMachine>
        </Link>
      </div>
      <section className={styles.section}>
        <h2>Latest Posts</h2>
        <ul>
          {allPostsData.map((post) => (
            <li key={post.id}>
              <article className={styles.article}>
                <time dateTime={post.date}>{post.date}</time>
                <div>
                  <h3>
                    <Link href={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <div>
                    {post.tags.join('')}
                  </div>
                </div>
              </article>
            </li>
          )

          )}
        </ul>

      </section>

      {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 >
            Posts <span>-&gt;</span>
          </h2>
          <p >
            Find all available posts.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 >
            Tags <span>-&gt;</span>
          </h2>
          <p >
            Filter post by tags
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 >
            Collections <span>-&gt;</span>
          </h2>
          <p >
            Templates, snippets, and more
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 >
            About <span>-&gt;</span>
          </h2>
          <p >
            About me
          </p>
        </a>
      </div> */}
    </main>
  );
}
