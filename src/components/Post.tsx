import { Comment } from "./Comment";
import { CommentList } from "./CommentList";
import styles from "./Post.module.scss";
import { PostContent } from "./PostContent";
import { PostForm } from "./PostForm";
import { PostHeader } from "./PostHeader";

import { FormEvent, useState } from "react";

export interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface ContentData {
  type: string;
  content: string;
}

export interface ContentArray extends Array<ContentData> {}
// type Content = ContentData[];

interface PostProps {
  postContent: {
    id: number,
    author: Author;
    content: ContentArray;
    publishedAt: Date;
  };
}

export function Post({
  postContent: { author, content, publishedAt },
}: PostProps) {
  const [comments, setComments] = useState(["Post muito bacana, hein!"]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();
    setComments((comments) => [...comments, newCommentText]);
    setNewCommentText("");
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentWithoutDeleteOne);
  }

  return (
    <article className={styles.post}>
      <PostHeader author={author} publishedAt={publishedAt} />
      <PostContent content={content} />
      <PostForm
        handlers={[handleCreateNewComment, newCommentText, setNewCommentText]}
      />
      <CommentList>
        {comments.map((comment, idx) => (
          <Comment
            key={idx}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </CommentList>
    </article>
  );
}
