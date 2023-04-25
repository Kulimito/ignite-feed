import styles from "./PostForm.module.scss";

import { FormEvent } from "react";

import { ChangeEvent, InvalidEvent } from "react";

interface PostFormProps {
  handlers: [(e: FormEvent) => void, string, (comment: string) => void];
}

export function PostForm({
  handlers: [handleCreateNewComment, newCommentText, setNewCommentText],
}: PostFormProps) {
  function handlerTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value);
    e.target.setCustomValidity("");
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <form className={styles.postForm} onSubmit={handleCreateNewComment}>
      <strong>Deixe seu feedback!</strong>
      <textarea
        onChange={handlerTextArea}
        placeholder="Deixe um comentário aqui!"
        value={newCommentText}
        onInvalid={handleNewCommentInvalid}
        required
      />
      <footer>
        <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </footer>
    </form>
  );
}
