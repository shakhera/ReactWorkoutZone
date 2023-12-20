// import { useEffect, useState } from "react";
import "./App.css";
// import BlogArticle from "./components/BlogArticle/BlogArticle";
// import BlogPost from "./components/BlogPost/BlogPost";
// import Journal from "./components/Journal/Journal";
import Mobile from "./components/Mobile/Mobile";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <Blog></Blog>
      {/* <BlogArticle heading="Blog Article" author="article"></BlogArticle>
      <BlogPost heading="Blog Post" author="post"></BlogPost>
      <Journal heading="Blog Journal" author="journal"></Journal> */}
      <Mobile></Mobile>
      <Todos></Todos>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <article className="blog">
        <h2 className="heading"> Mobile-Optimized Todo Component</h2>
        <p>
          Creating a Todo component for mobile requires thoughtful consideration
          of layout, interaction, and responsiveness. Designing a responsive
          Todo component involves optimizing its layout and functionality to
          suit smaller screens, ensuring an intuitive and visually appealing
          experience for users on mobile devices. Elements such as
          touch-friendly controls, vertical layouts, and responsive styling play
          pivotal roles in crafting an efficient and user-centric Todo component
          for mobile applications. Integrating responsive design principles
          ensures that the Todo component remains accessible and functional
          across a variety of mobile devices, enhancing user engagement and
          satisfaction.
        </p>
      </article>
    </div>
  );
}

export default App;
