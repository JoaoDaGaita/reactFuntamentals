import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'
import { Avatar } from "./Avatar"
import { useState } from "react"

interface commentProps {
  content: string
  onDeleteComment: (comment: string) => void
}


export function Comment({ content, onDeleteComment }: commentProps) {
  const [likeCount, setLikeComment] = useState(0)

  function handleLikeComment() {
    setLikeComment((prev) => prev + 1)
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/joaodagaita.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vicente</strong>
              <time title="07 de Março às 15:08h" dateTime="2024-03-07 15:08:00">Cerca de 2h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}