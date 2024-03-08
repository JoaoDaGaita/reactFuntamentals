import { PencilLine } from "phosphor-react"
import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="http://github.com/mojumbo.png" />
        <strong>João Vicente</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}