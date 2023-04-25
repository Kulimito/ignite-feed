import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./components/Wrapper";

import "./global.css";

const profileData = {
  profileImageBackground:
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
  profileName: "Leonardo Silva Kuligovski",
  profileOcuppation: "Web Developer",
  avatarUrl: "https://github.com/kulimito.png",
};

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rockeseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/5003903?v=4",
      name: "Stephen Grider",
      role: "CEO @ RallyCoding",
    },
    content: [
      { type: "paragraph", content: "E aí! Tudo bem? 👋" },
      {
        type: "paragraph",
        content: "Alguém pode me ajudar com o React Hook UseEffect?",
      },
      { type: "link", content: "ReactJS/Hooks" },
    ],
    publishedAt: new Date("2023-04-23 18:43:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Sidebar profileData={profileData} />
        <Main>
          {posts.map((post) => (
            <Post
              postContent={post}
              key={post.id}
            />
          ))}
        </Main>
      </Wrapper>
    </>
  );
}
