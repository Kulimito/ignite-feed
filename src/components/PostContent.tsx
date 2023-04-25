import { ContentArray } from "./Post";
import styles from "./PostContent.module.scss";

export function PostContent({ content }: { content: ContentArray }) {
  return (
    <div className={styles.content}>
      {content.map(({ type, content }, idx) =>
        type == "paragraph" ? (
          <p key={idx}>{content}</p>
        ) : (
          <p key={idx}>
            <a href="#">{content}</a>
          </p>
        )
      )}
    </div>
  );
}
