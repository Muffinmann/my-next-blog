import { Children, cloneElement, createElement, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import styles from './TypeMachine.module.css';


const applyTypeAnimation = (text: string, update: (s: string) => void) => {
  let currentString = '';
  Array.from(text).forEach((letter, index) => {
    setTimeout(() => {
      currentString = currentString.concat(letter);
      update(currentString);
    }, 150 * index);
  });
};

const useTypeAnimation = (text: string) => {
  const [letters, setLetters] = useState('');

  useEffect(() => {
    applyTypeAnimation(text, setLetters);
  }, [text]);

  return letters;
};

const Typewriter = ({ children }: {children: string}) => {
  const letters = useTypeAnimation(children);
  return (
    <>
      {letters}<span className={styles.caret} />
    </>
  );
};

const Scheduler = ({ children }:{children: ReactElement[]}) => {
  const isFirstChildString = typeof children[0] === 'string';
  const text = isFirstChildString ? children[0] : children[0]?.props.children || '';
  const letters = useTypeAnimation(text);
  return <>
    {isFirstChildString ? letters : cloneElement(children[0], children[0]?.props, ` ${letters}`)}
    {letters.length === text.length && children.length > 1 && <Scheduler key={Date.now()}>{children.slice(1)}</Scheduler>}
    {/* <span className={styles.caret} /> */}
  </>;
};

const TypeMachine = ({ children }: {children: (string | ReactElement)[]}) => {
  const arrayChildren = Children.toArray(children).map((child, index) => index > 0 && typeof child === 'string' ? ` ${child}` : child) as ReactElement[];
  console.log('children = ', arrayChildren);

  return (
    <div className={styles.typewriter}>
      <Scheduler>{arrayChildren}</Scheduler>
      <span className={styles.caret} />
    </div>
  );
};
export default TypeMachine;
