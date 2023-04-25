import styles from "./Wrapper.module.scss";

export function Wrapper({ children }: { children: JSX.Element[] }) {
  return <div className={styles.wrapper}>{children}</div>;
}
