import styles from "./Main.module.scss";

export function Main({ children }: { children: JSX.Element[] }) {
  return <main className={styles.main}>{children}</main>;
}
