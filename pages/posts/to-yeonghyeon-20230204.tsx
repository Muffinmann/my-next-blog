import TypeMachine from "@/components/TypeMachine";
import styles from '@/styles/utils.module.css';
import sunset from '@/data/img/sunset_20230204.jpg';
import Image from "next/image";

export default function Letter() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <Image src={sunset} alt="sunset" style={{
            width: "90vw",
            height: "50vw",
            maxWidth: "600px",
            maxHeight: "400px",
          }} />
        </div>
        <TypeMachine>
          Dear Yeongheyon:<br/>
          I took this picture today. It reminds me of those days when we stood on the balcony
          in summers warm evenings and watched the sun dipping below the horizon.
          Your arms wrapped tightly around me, I grabbed your small hands and we just enjoyed
          the simple joys in life.<br/>
          Those are the ordinary moments that have made my life so incredibly rich and memorable.
          I feel like we are tied tighter and tighter as each moment we share, as the days pass.
          Where will life take us? I can not say, but it is certain that we will face the world together,
          hand in hand, in every moment, every place.<br/>
          Lai<br/>
          2023-02-04
        </TypeMachine>
      </div>
    </main>
  );
};
