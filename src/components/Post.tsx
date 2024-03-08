import { format } from "date-fns"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from './Post.module.css'
import { ptBR } from "date-fns/locale"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
import { useState } from "react"

export interface postProps {
  post: PostType
}

export interface PostType {
  id?: number
  author: Author
  content: Content[]
  publishedAt: Date
}

export interface Author {
  avatarUrl: string
  name: string
  role: string
}

export interface Content {
  type: "paragraph" | "link"
  content: string
}

export function Post({ post }: postProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein!'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentInvalid(event: React.FormEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('Esse campo é obrigatórtio!')

  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('')
    setNewCommentText(event?.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={event => handleCreateNewComment(event)} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={event => handleNewCommentChange(event)}
          onInvalid={event => handleNewCommentInvalid(event)}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}