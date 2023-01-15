// import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/utils.module.css';
import cls from '@/lib/utils/cls';
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={cls(styles.content_center)}>
        <p >
          <code>Welcome to my blog!</code>
        </p>
      </div>
      <section>
        <h2>Latest Posts</h2>
        <ul>
          <li>
            <article className={styles.post_grid}>
              <dl>
                <dt>Published on</dt>
                <dd>
                  <time dateTime="2023-01-15">2023-01-15</time>
                </dd>
              </dl>
              <div>
                <div>
                  <h3>
                    <Link href={`/blog/post1`}>
                      post title
                    </Link>
                  </h3>
                  <div>
                    tag1 tag2
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
        <div>
          <p>post title</p>

        </div>
      </section>

      <div className={styles.grid}>
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
      </div>
    </main>
  );
}
