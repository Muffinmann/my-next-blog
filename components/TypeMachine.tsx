import { useEffect, useState } from "react";
import styles from './TypeMachine.module.css';


const TypeMachine = ({ children }: {children: string}) => {
  console.log(children);
  const [letters, setLetters] = useState('');
  // console.log(children);
  useEffect(() => {
    let currentString = '';
    Array.from(children).forEach((letter, index) => {
      setTimeout(() => {
        currentString = currentString.concat(letter);
        setLetters(currentString);
      }, 150 * index);
    });
  }, [children]);
  return (
    <div className={styles.typewriter}>
      {letters}<span className={styles.caret} />
    </div>
  );
};
export default TypeMachine;
