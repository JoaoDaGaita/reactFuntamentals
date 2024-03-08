import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";

import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar";



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "João Vicente",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Diego Fernandes Smith",
      role: "CTO @ Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2024-01-03 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Bob Johnson",
      role: "Designer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Alice Brown",
      role: "Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Chris Green",
      role: "Manager"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 6,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Eva White",
      role: "Analyst"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2023-06-03 20:00:00')
  },
  {
    id: 7,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "David Miller",
      role: "Coordinator"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2020-10-03 20:00:00')
  },
  {
    id: 8,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Grace Taylor",
      role: "Artist"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2023-09-03 20:00:00')
  },
  {
    id: 9,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Mark Anderson",
      role: "Consultant"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 10,
    author: {
      avatarUrl: "https://github.com/joaodagaita.png",
      name: "Olivia Turner",
      role: "Coordinator"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', }
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  }
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post key={post.id} post={post} />
            )
          })}
        </main>
      </div>
    </div>
  )
}