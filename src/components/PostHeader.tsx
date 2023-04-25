import styles from "./PostHeader.module.scss";

import { Avatar } from "./Avatar";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Author } from "./Post";

interface PostHeaderProps {
  author: Author;
  publishedAt: Date;
}

export function PostHeader({
  author: { avatarUrl, name, role },
  publishedAt,
}: PostHeaderProps) {
  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit"
  // }).format(publishedAt);

  const publishedDateFormatted = format(
    publishedAt,
    "d  'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <header className={styles.postHeader}>
      <div className={styles.author}>
        <Avatar avatarUrl={avatarUrl} />
        <div className={styles.authorInfo}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
    </header>
  );
}
