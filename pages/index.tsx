// import Head from 'next/head';
import styles from '@/styles/utils.module.css';
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
  return (
    <main className={styles.main}>
      <div>

        <TypeMachine>
          Hi, My name is Lai, a software developer living in Germany.<br/>
          To me, writing is an important way to recapture those subtle sparks behind the busy life.
          It&apos;s a way for me to slow down and take a closer look at the world around me,
          to reflect on my experiences and thoughts, and to express myself in a meaningful way.<br/>
          I&apos;m starting this blog to share my musings on a variety of topics on the journey of my life...<br/>
        </TypeMachine>
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
