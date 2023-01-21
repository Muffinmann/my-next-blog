import { Children, cloneElement, ReactElement, useEffect, useState } from "react";
import styles from './TypeMachine.module.css';


const applyTypeAnimation = (text: string, update: (s: string) => void) => {
  let currentString = '';
  Array.from(text).forEach((letter, index) => {
    setTimeout(() => {
      currentString = currentString.concat(letter);
      update(currentString);
    }, 100 * index);

  });
};

const useTypeAnimation = (text: string) => {
  const [letters, setLetters] = useState('');

  useEffect(() => {
    applyTypeAnimation(text, setLetters);
  }, [text]);

  return letters;
};


const injectDynamicString = (e:ReactElement, str: string): ReactElement | ReactElement[] => {
  const childrenElement = e?.props?.children;
  if (!childrenElement) return e;
  if (typeof childrenElement === 'string') return cloneElement(e, e?.props, ` ${str}`);
  if (Array.isArray(childrenElement)) {
    return Children.map(childrenElement, (child: ReactElement) => injectDynamicString(child, str)) as ReactElement[];
  }
  return injectDynamicString(childrenElement.props.children, str);
};

const extractWrappedText = (e: ReactElement): string => {
  const childrenElement = e?.props?.children;
  if (!childrenElement) return '';
  if (typeof childrenElement === 'string') return childrenElement;
  if (Array.isArray(childrenElement)) {
    return Children.map(childrenElement, (child: ReactElement) => extractWrappedText(child)).join(' ') as string;
  }
  return extractWrappedText(childrenElement.props.children);
};

const Scheduler = ({ children }:{children: ReactElement[]}) => {
  const target = children[0];
  const isFirstChildString = typeof target === 'string';
  const text = isFirstChildString ? target : extractWrappedText(target);
  const letters = useTypeAnimation(text);
  return <>
    {isFirstChildString ? letters : injectDynamicString(target, letters)}
    {letters.length === text.length && children.length > 1 && <Scheduler key={Date.now()}>{children.slice(1)}</Scheduler>}
  </>;
};

const TypeMachine = ({ children }: {children: string | (string | ReactElement)[]}) => {
  const arrayChildren = Children.toArray(children).map((child, index) => index > 0 && typeof child === 'string' ? ` ${child}` : child) as ReactElement[];

  return (
    <p className={styles.typewriter}>
      <Scheduler>{arrayChildren}</Scheduler>
      <span className={styles.caret} />
    </p>
  );
};
export default TypeMachine;
