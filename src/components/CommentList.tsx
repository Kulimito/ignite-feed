import styles from "./CommentList.module.scss";

export function CommentList({ children }: { children: JSX.Element[] }) {
  return <div className={styles.commentList}>{children}</div>;
}
