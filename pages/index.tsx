import styles from './index.module.css';
import Link from 'next/link';
import { PostData, getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';


export const getStaticProps:GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()?.filter((post) => !post.draft);
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
    <div>
      <div>

      </div>
      <main className={styles.main}>
        {/* <div>
        Hi, My name is Lai, a software developer living in Germany.<br/>
        To me, writing is an important way to recapture those subtle sparks behind the busy life.
        It&apos;s a way for me to slow down and take a closer look at the world around me,
        to reflect on my experiences and thoughts, and to express myself in a meaningful way.<br/>
        I&apos;m starting this blog to share my musings on a variety of topics on the journey of my life.
        <TypeMachine> </TypeMachine>
      </div> */}
        <section className={styles.section}>
          <h2>Latest Posts</h2>
          <ul>
            {allPostsData.map((post) => (
              <li key={post.id}>
                <article className={styles.article}>
                  <time dateTime={post.date}>{post.date}</time>
                  <div>
                    <span className={styles.post_title}>
                      <Link href={`/posts/${post.id}`}>
                        {post.title}
                      </Link>
                    </span>
                    <div style={{ display: 'inline-block', fontSize: 'medium', marginLeft: '1rem' }}>
                      <i>
                        {post.tags.join(', ')}
                      </i>
                    </div>
                    <div>
                      {post.summary}
                    </div>
                  </div>
                </article>
              </li>
            )

            )}
          </ul>

        </section>
      </main>
    </div>
  );
}
