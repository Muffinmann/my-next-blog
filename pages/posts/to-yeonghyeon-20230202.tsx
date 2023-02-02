import TypeMachine from "@/components/TypeMachine";
import styles from '@/styles/utils.module.css';


export default function Letter() {
  return (
    <main className={styles.main}>
      <div>
        <TypeMachine>
          Dear Yeongheyon:<br/>
          while I&lsquo;m writing this letter, I am basking in the warmth of the bath,
          letting the stress and exhaustion of the past fortnight slip away.
          I find myself torn between regretting taking on the project and feeling
          like it&lsquo;s just added more chaos to my life, and half believing that
          these struggles are simply the necessary effort required to
          attain the dazzling star of my dreams.<br/>
          Life often seems like a never-ending journey,
          with each moment shaped by unexpected occurrences and chance encounters.
          Like a vessel on the open sea, I am at the mercy of the waves,
          sometimes losing sight of my guiding light and succumbing to anxiety
          about the uncertain future.
          Yet it is in these moments of doubt that I miss you the most.
          I imagine your embrace, feeling your warmth and the gentle touch of your hair.
          Despite the distance between us, I feel as though you are with me,
          giving me the strength to brave the endless sea of life.<br/>
          Love you and be brave,<br/>
          Lai<br/>
          2023-02-02
        </TypeMachine>
      </div>
    </main>
  );
};
